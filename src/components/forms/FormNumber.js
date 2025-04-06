import React from "react";
/* libs */
import NumberFormat from "react-number-format";
/* components */
import FormLabel from "./FormLabel";

/**
 * @param props object{}
 * @returns Component</>
 * @example
 * import FormNumber from "@/components/forms/FormNumber";
 * <FormNumber
 *    label="Example"
 *    id="example"
 *    name="example"
 *    value="0"
 *    onChange={() => {}}
 * />
 * @website https://s-yadav.github.io/react-number-format/
 */
function FormNumber(props) {

  /* initial */
  let initialProps = {
    className: "form-control text-layout" /* form-control-lg */,
  };

  const {
    label,
    labelClassName,
    required,
    title = '',
    name = "",
    value = "",
    onChange = () => { },
    className = "",
    autoComplete = "off",
    thousandSeparator=",", 
    isValid = false,
    validMessage = "",
    validClassName = "",
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
    <NumberFormat
      value={value}
      onChange={(e) => onChange(e)}
      thousandSeparator={thousandSeparator}
      className={`${initialProps.className} ${className}`}
      autoComplete={autoComplete}
      placeholder={handleGetPlaceholder()}
      title={handleGetTitle()}
      {...others}
    />
    {isValid && <span className={`form-error ${validClassName}`}>{validMessage}</span>}
  </>);
}

export default FormNumber;
