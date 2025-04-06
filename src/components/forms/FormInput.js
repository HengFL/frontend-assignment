import React from "react";
/* components */
import FormLabel from "./FormLabel";

/**
 * @param props object{}
 * @returns Component</>
 * @example
 * import FormInput from "@/components/forms/FormInput";
 * <FormInput
 *    label="Example"
 *    id="example"
 *    name="example"
 *    value=""
 *    onChange={() => {}}
 * />
 */
function FormInput(props) {

  /* initial */
  let initialProps = {
    className: "form-control text-layout" /* form-control-lg */,
  };

  const {
    label,
    labelClassName,
    required,
    title = "",
    type = "text",
    name = "",
    value = "",
    onChange = () => { },
    className = "",
    autoComplete = "off",
    isValid = false,
    validMessage = "",
    validClassName = "",
    placeholder = "",
    ...others
  } = props;

  /* functions */
  const handleGetPlaceholder = () => {
    let result = "";
    if (props.placeholder !== undefined) {
      result = props.placeholder;
    }
    else if (props.label !== undefined) {
      result = props.label;
    }
    return result;
  };

  const handleGetTitle = () => {
    let result = "";
    if (props.title !== undefined) {
      result = props.title;
    }
    else if (value || value === 0) {
      result = value;
    }
    else {
      result = handleGetPlaceholder();
    }
    return result;
  };


  return (<>
    <FormLabel
      label={label}
      required={required}
      labelClassName={labelClassName}
    />
    <input
      type={type}
      {...(props.value !== undefined ? { value: value } : {})}
      name={name}
      onChange={(e) => onChange(e)}
      className={`${initialProps.className} ${className}`}
      autoComplete={autoComplete}
      placeholder={handleGetPlaceholder()}
      title={handleGetTitle()}
      {...others}
    />
    {isValid && <span className={`form-error ${validClassName}`}>{validMessage}</span>}
  </>);
}

export default FormInput;
