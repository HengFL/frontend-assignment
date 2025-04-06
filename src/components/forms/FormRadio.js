import React from "react";
/* libs */
import { Radio } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
/* components */
import FormLabel from "./FormLabel";

/**
 * @param props object{}
 * @returns Component<></>
 * @example
 * import FormRadio from "@/components/forms/FormRadio";
 * <FormRadio
 *    label="Example"
 *    name="example"
 *    value="1"
 *    onChange={() => {}}
 *    options={[
 *      {id: "example1", label: "Example 1"},
 *      {id: "example2", label: "Example 2"},
 *    ]}
 * />
 *  @website https://pretty-checkbox-react.netlify.app/
 */
function FormRadio(props) {

  /* initial */
  // let initialProps = {
  //   className: "form-check-input text-layout",
  // };

  const {
    label,
    labelClassName,
    required,
    name = "",
    value = "",
    onChange = () => { },
    boxClassName = "",
    className = "",
    options = [],
    checkInline = true,
    disabled = false,
    isValid = false,
    validMessage = "",
    validClassName = "",
    ...others
  } = props;

  /* functions */
  const handleGetChecked = (option) => {
    let result = false;
    if (option.checked !== undefined) {
      result = option.checked
    }
    else {
      result = Boolean(value?.toString() === option?.value?.toString())
    }
    return result;
  }

  const handleGetDisabled = (option) => {
    let disable = false;
    if (props.disabled !== undefined && props?.disabled === true) {
      disable = disabled;
    }
    else if (option.disabled !== undefined) {
      disable = option.disabled;
    }
    return disable;
  };

  const handleGetTitle = (v) => {
    let result = "";
    if (v.title !== undefined) {
      result = v.title;
    }
    else if (v.label != undefined) {
      result = v.label;
    }
    else {
      result = label;
    }
    return result;
  };

  return (<>
    <FormLabel
      label={label}
      required={required}
      labelClassName={labelClassName}
    />
    <div className={boxClassName}>
      {options?.map((option, key) => (
        <div key={key} className={checkInline ? `form-check-inline` : ``}>
          <Radio
            color="primary-o"
            title={handleGetTitle(option)}
            id={option.id}
            name={name}
            value={option.value}
            checked={handleGetChecked(option)}
            onChange={onChange}
            className={`${className}`}
            disabled={handleGetDisabled(option)}
            {...others}
          >
            {option.label}
          </Radio>
        </div>
      ))}
    </div>
    {isValid && <span className={`form-error ${validClassName}`}>{validMessage}</span>}
  </>);
}

export default FormRadio;
