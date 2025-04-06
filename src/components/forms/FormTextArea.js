import React from "react";
/* libs */
import TextareaAutosize from 'react-textarea-autosize';
/* components */
import FormLabel from "./FormLabel";

/**
 * @param props object{}
 * @returns Component<></>
 * @example
 * import FormTextArea from "@/components/forms/FormTextArea";
 * <FormTextArea
 *    label="Example"
 *    id="example"
 *    name="example"
 *    value=""
 *    onChange={() => {}}
 * />
 * @website https://github.com/Andarist/react-textarea-autosize
 */
function FormTextArea(props) {

  /* initial */
  let initialProps = {
    className: "form-control text-layout" /* form-control-lg */,
  };

  const {
    label,
    required,
    labelClassName,
    id = "",
    name = "",
    value = "",
    onChange = () => { },
    className = "",
    autoComplete = "off",
    minRows = 2,
    maxRows = 20,
    placeholder = "",
    isValid = false,
    validMessage = "",
    validClassName = "",
    ...others
  } = props;

  return (<>
    <FormLabel
      label={label}
      required={required}
      labelClassName={labelClassName}
    />
    <TextareaAutosize
      id={id}
      name={name}
      {...(props.value !== undefined ? { value: value } : {})}
      onChange={(e) => onChange(e)}
      className={`${initialProps.className} ${className}`}
      autoComplete={autoComplete}
      placeholder={props.placeholder !== undefined ? props.placeholder : props.label}
      minRows={minRows}
      {...others}
    />
    {isValid && <span className={`form-error ${validClassName}`}>{validMessage}</span>}
  </>);
}

export default FormTextArea;
