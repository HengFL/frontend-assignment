/* libs */
import { Checkbox } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
/* components */
import FormLabel from "./FormLabel";

/**
 * @param props object{}
 * @returns Component<></>
 * @example
 * import FormCheckbox from "components/forms/FormCheckbox";
 * <FormCheckbox
 *    label="Example"
 *    name="example"
 *    value={["1"]}
 *    onChange={() => {}}
 *    options={[
 *      {id: "example1", label: "Example 1"},
 *      {id: "example2", label: "Example 2"},
 *    ]}
 * />
 *  @website https://pretty-checkbox-react.netlify.app/
 */
function FormCheckbox(props) {

  /* initial */
  // let initialProps = {
  //   className: "form-check-input text-layout",
  // };

  const {
    label,
    labelClassName,
    required,
    // id = "",
    value = [],
    defaultValue = [],
    name = "",
    onChange = () => { },
    checkboxClassName = "",
    className = "",
    options = [],
    checkInline = false,
    indeterminate = false,
    disabled = false,
    isValid = false,
    validMessage = "",
    validClassName = "",
    ...others
  } = props;

  /* functions */
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

  return (<>
    <FormLabel
      label={label}
      required={required}
      labelClassName={labelClassName}
    />
    <div className="">
      {options?.map((option, i) => (
        <div key={i} className={checkInline ? `form-check-inline` : ``}>
          <Checkbox
            color="primary-o"
            shape="curve"
            icon={indeterminate ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-check"></i>}
            title={handleGetTitle(option)}
            id={option.id}
            name={name}
            value={option.value}
            checked={option.checked !== undefined ? option.checked : value?.includes(option.value)}
            className={`${className}`}
            onChange={onChange}
            disabled={handleGetDisabled(option)}
            {...others}
          >
            {option.label}
          </Checkbox>
        </div>
      ))}
    </div>
    {isValid && <span className={`form-error ${validClassName}`}>{validMessage}</span>}
  </>);
}

export default FormCheckbox;
