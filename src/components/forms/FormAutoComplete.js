import React from "react";
/* libs */
import AsyncSelect from "react-select/async";
/* components */
import FormLabel from "./FormLabel";

/**
 * @param props object{}
 * @returns Component<></>
 * @example
 * import FormAutocomplete from "components/forms/FormAutocomplete";
 * <FormAutocomplete
 *    label="Example"
 *    id="example"
 *    name="example"
 *    onChange={() => {}}
 *    value=""
 *    options={[
 *      {id: "1", title: "Example 1"},
 *      {id: "2", title: "Example 2"},
 *    ]}
 *    loadOptions={() => 
 *      Promise(resolve) => resolve([{id: "3", title: "Example 3"}])
 *    }
 *    getOptionValue={(e) => e.id}
 *    getOptionLabel={(e) => e.title}
 * />
 * @website https://react-select.com/async
 */
function FormAutoComplete(props) {

  /* initial */
  let initialProps = {
    className: "react-select-custom text-layout" /* form-select form-select-sm */,
    placeholder: "- กรุณาค้นหา -",
  };

  const {
    label,
    labelClassName,
    required,
    className = "",
    name = "",
    value = "",
    onChange = () => { },
    getValue = { name: "", value: "" },
    options = [],
    loadOptions = [],
    isValid = false,
    validMessage = "",
    validClassName = "",
    placeholder = "",
    isDisabled = false,
    isSearchable = true,
    isClearable = true,
    menuPosition = "fixed",
    ...others
  } = props;

  /* function */
  const handleGetValue = () => {
    let result = "";
    if (options?.length > 0) {
      let valueName = handleGetOptionValueName();
      let valueStr = props?.getValue !== undefined ? props?.getValue?.value : value;
      result = options.find((v) => v && v[valueName]?.toString() === valueStr?.toString());
    }
    return result;
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

  // const handleGetOptionLabelName = () => {
  //   let result = '';
  //   if (props.getOptionLabel !== undefined) {
  //     result = props.getOptionLabel.toString().replace(/[ {}\n;]/g, "").split('e.')[1];
  //   }
  //   else {
  //     result = 'label';
  //   }
  //   return result;
  // }

  return (<>
    <FormLabel
      label={label}
      required={required}
      labelClassName={labelClassName}
    />
    <AsyncSelect
      cacheOptions
      defaultOptions={options}
      name={name}
      value={handleGetValue()}
      onChange={(e) => {
        if (e !== null) {
          let valueName = handleGetOptionValueName();
          onChange({
            target: {
              name: name,
              value: e[valueName],
            },
          });
        }
        else {
          onChange({
            target: {
              name: name,
              value: "",
            },
          });
        }
      }}
      className={`${initialProps.className} ${className}`}
      loadOptions={loadOptions}
      menuPosition={menuPosition}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      isSearchable={isSearchable}
      isClearable={isClearable}
      isDisabled={handleGetDisabled()}
      placeholder={handleGetPlaceholder()}
      noOptionsMessage={props.noOptionsMessage !== undefined ? props.noOptionsMessage : () => handleGetPlaceholder()}
      {...others}
    />
    {isValid && <span className={`form-error ${validClassName}`}>{validMessage}</span>}
  </>);
}

export default FormAutoComplete;
