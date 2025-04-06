import React, { Children } from "react";
/* libs */
import AsyncSelect from "react-select/async";
import { components } from "react-select";
import FormLabel from "./FormLabel";

/**
 * @param props object{}
 * @returns Component</>
 * @example
 * import FormMultiAutoComplete from "@/components/forms/FormMultiAutoComplete";
 * <FormMultiAutoComplete
 *    label="Example"
 *    id="example"
 *    name="example"
 *    onChange={() => {}}
 *    value={["1"]} // type array
 *    options={[
 *      {id: "1", title: "Example 1"},
 *      {id: "2", title: "Example 2"},
 *    ]}
 *    loadOptions={() => 
 *      Promise(resolve) => resolve([{id: "3", title: "Example 3"}])
 *    }
 *    getOptionValue={(e) => e.id}
 *    getOptionLabel={(e) => e.title}
 *    maxShowMultiValue={2}
 * />
 * @website https://react-select.com/async
 */
function FormMultiAutoComplete(props) {

    /* initial */
    let initialProps = {
        className: "text-layout" /* form-select form-select-sm */,
        placeholder: "- กรุณาเลือก -",
    };

    const {
        label,
        labelClassName,
        required,
        className = "",
        name = "",
        value = "",
        getValue = { name: "", value: [] },
        onChange = () => { },
        options = [],
        loadOptions = [],
        isValid = false,
        validMessage = "",
        validClassName = "",
        placeholder = "",
        isDisabled = false,
        maxShowMultiValue = 2,
        isSearchable = true,
        menuPosition = "fixed",
        ...others
    } = props;

    /* functions */
    const handleGetValue = () => {
        let result = [];
        if (options?.length > 0) {
            let valueName = handleGetOptionValueName();
            let valueArr = props?.getValue !== undefined ? props?.getValue?.value : value;
            if (Array.isArray(valueArr) && valueArr?.length > 0) {
                result = options?.filter((v) => valueArr?.filter(
                    (o) => o[valueName]?.toString() === v[valueName]?.toString() || o?.toString() === v[valueName]?.toString()).length > 0
                );
            }
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

    return (<>
        <FormLabel
            label={label}
            required={required}
            labelClassName={labelClassName}
        />
        <AsyncSelect
            isMulti={true}
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
                            value: e.map(m => m[valueName]),
                            option: e || []
                        },
                    });
                }
                else {
                    onChange({
                        target: {
                            name: name,
                            value: [],
                            option: e || []
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
                MultiValueLabel,
                ValueContainer,
            }}
            isDisabled={handleGetDisabled()}
            isSearchable={isSearchable}
            maxShowMultiValue={maxShowMultiValue}
            placeholder={handleGetPlaceholder()}
            {...others}
        />
        {isValid && <span className={`form-error ${validClassName}`}>{validMessage}</span>}
    </>);
}

const ValueContainer = ({ children, getValue, ...props }) => {
    let maxToShow = props.selectProps.maxShowMultiValue;
    let [values, input] = children;
    var length = getValue().length;
    let displayChips = Children.toArray(children).slice(0, maxToShow);
    let shouldBadgeShow = length > maxToShow;
    let displayLength = length - maxToShow;
    return (
        <components.ValueContainer {...props}>
            {length > 0 && displayChips}
            {length === 0 && values}
            {length === 0 && input}
            {length >= maxToShow && input}
            <div className="root text-small opacity-75">{shouldBadgeShow && `+${displayLength} รายการ`}</div>

        </components.ValueContainer>
    );
};

const MultiValueLabel = (props) => {
    return (
        <div title={props?.children || ''}>
            <components.MultiValueLabel {...props} />
        </div>
    );
};

export default FormMultiAutoComplete;
