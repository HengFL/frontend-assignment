import React from "react";
/* libs */
import Select, { components } from "react-select";
/* components */
import FormLabel from "./FormLabel";

/**
 * @param props object{}
 * @returns Component<></>
 * @example
 * import FormSelect from "@/components/forms/FormSelect";
 * <FormSelect
 *    label="Example"
 *    id="example"
 *    name="example"
 *    value="1"
 *    onChange={() => {}}
 *    options={[
 *      {id: "1", title: "Example 1"},
 *      {id: "2", title: "Example 2"},
 *    ]}
 *    getOptionValue={(e) => e.id}
 *    getOptionLabel={(e) => e.title}
 * />
 * @website https://react-select.com/home
 */
function FormSelect(props) {

  /* initial */
  let initialProps = {
    className: "react-select-custom text-layout" /* form-select form-select-sm */,
    placeholder: "- กรุณาเลือก -",
  };

  let {
    label,
    labelClassName,
    required,
    title = "",
    className = "",
    name = "",
    options = [],
    value = "",
    onChange = () => { },
    isValid = false,
    validMessage = "",
    validClassName = "",
    placeholder = "",
    isDisabled = false,
    maxShowMultiValue = 2,
    isSearchable = true,
    isClearable = true,
    menuPosition = "fixed",
    ...others
  } = props;

  /* functions */
  const handleGetValue = () => {
    let valueObj = {};
    if (options?.length > 0) {
      let valueName = handleGetOptionValueName();
      let valueStr = props?.getValue !== undefined ? props?.getValue?.value : value;
      options.forEach(v => {
        if (v && v.options !== undefined) {  /* for options group */
          if (v.options.length > 0) {
            v.options.forEach(o => {
              if (o && o[valueName]?.toString() === valueStr?.toString()) {
                valueObj = o;
                return false
              }
            });
          }
        }
        else if (v && v[valueName]?.toString() === valueStr?.toString()) {
          valueObj = v;
          return false
        }
      });
    }
    return valueObj;
  };

  const handleGetDisabled = () => {
    let disable = isDisabled;
    if (props.disabled !== undefined) {
      disable = props.disabled;
    }
    return disable;
  };

  const handleGetPlaceholder = () => {
    let result = "";
    if (props.placeholder !== undefined) {
      result = props.placeholder;
    }
    else {
      result = initialProps.placeholder;
    }
    return result;
  };

  const handleGetTitle = () => {
    let result = "";
    if (props.title !== undefined) {
      result = props.title;
    }
    else if (props.getOptionLabel !== undefined) {
      let valueName = handleGetOptionValueName();
      let valueObj = handleGetValue();
      if (Object.keys(valueObj).length > 0) {
        result = valueObj[valueName]
      }
      else {
        result = handleGetPlaceholder();
      }
    }
    else {
      result = handleGetPlaceholder();
    }
    return result;
  };

  const handleGetClearable = () => {
    let result = isClearable;
    if (isClearable === true) {
      let val = handleGetValue();
      if (Object.keys(val).length === 0) {
        result = false;
      }
      else if (!value) {
        result = false;
      }
    }
    return result;
  };

  const handleGetOptionValueName = () => {
    let result = '';
    if (props.getOptionValue !== undefined) {
      result = props.getOptionValue.toString().replace(/[ {}\n;]/g, "").split('e.')[1];
    }
    else {
      result = 'value';
    }
    return result;
  }

  const handleGetOptionLabelName = () => {
    let result = '';
    if (props.getOptionLabel !== undefined) {
      result = props.getOptionLabel.toString().replace(/[ {}\n;]/g, "").split('e.')[1];
    }
    else {
      result = 'label';
    }
    return result;
  }

  const ValueContainer = (props) => {
    return (
      <div title={handleGetTitle()} style={{ display: 'contents', pointerEvents: 'auto' }}>
        <components.ValueContainer {...props}>
          {props.children}
        </components.ValueContainer>
      </div>
    );
  };

  const MenuList = ({ children, ...props }) => {
    return (
      <components.MenuList {...props}>
        {Array.isArray(children) ? children.slice(0, props.selectProps?.maxOptions) : children}
      </components.MenuList>
    );
  };

  return (<>
    <FormLabel
      label={label}
      required={required}
      labelClassName={labelClassName}
    />
    <Select
      className={`${initialProps.className} ${className}`}
      styles={{ menuPortal: base => ({ ...base, zIndex: 1999 }) }}
      name={name}
      value={handleGetValue()}
      onChange={(e) => {
        if (e !== null) {
          let valueName = handleGetOptionValueName();
          onChange({
            target: {
              name: name,
              value: e[valueName],
              option: e || []
            },
          });
        }
        else {
          onChange({
            target: {
              name: name,
              value: "",
              option: e || []
            },
          });
        }
      }}
      options={options}
      components={{
        IndicatorSeparator: () => null,
        ValueContainer,
        MenuList,
      }}
      isDisabled={handleGetDisabled()}
      placeholder={handleGetPlaceholder()}
      menuPosition={menuPosition}
      menuContainerStyle={{ 'zIndex': 1999 }}
      maxShowMultiValue={maxShowMultiValue}
      isSearchable={isSearchable}
      isClearable={handleGetClearable()}
      {...others}
    />

    {isValid && <span className={`form-error ${validClassName}`}>{validMessage}</span>}
  </>);
}

export default FormSelect;