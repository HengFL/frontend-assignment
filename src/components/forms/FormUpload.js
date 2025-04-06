import React from "react";
/* components */
import FormLabel from "./FormLabel";

/**
 * @param props object{}
 * @returns Component<></>
 * @example
 * import FormUpload from "@/components/forms/FormUpload";
 * const uploadRef = React.useRef();
 * <FormUpload
 *    label="Example"
 *    uploadRef={uploadRef} //React.useRef()
 *    id="example"
 *    name="example"
 *    value=""
 *    onChange={() => {}}
 * />
 */
function FormUpload(props) {

    /* initial */
    let initialProps = {
        className: "form-control form-control-sm text-layout" /* form-control-lg */,
        placeholder: "กรุณาเลือกไฟล์",
    };

    const {
        label,
        labelClassName,
        required,
        title = "",
        type = "file",
        uploadRef = undefined,
        id = "",
        name = "",
        value = "",
        onChange = () => { },
        className = "",
        selectFileText = "เลือกไฟล์",
        isValid = false,
        validMessage = "",
        validClassName = "",
        placeholder = "",
        disabled = false,
        isClearable = false,
        // ...others
    } = props;

    /* functions */
    const handleGetPlaceholder = () => {
        let result = "";
        if (props.placeholder !== undefined) {
            result = placeholder;
        }
        else {
            result = initialProps.placeholder;
        }
        return result;
    };

    const handleGetTitle = () => {
        let result = "";
        if (props.title !== undefined) {
            result = title;
        }
        else if (handleGetFileName()) {
            result = handleGetFileName();
        }
        else {
            result = handleGetPlaceholder();
        }
        return result;
    };

    const handleGetFileName = () => {
        let result = '';
        if (value) {
            result = value.split(/\\/)?.pop()
        }
        return result || '';
    }

    return (<>
        <FormLabel
            label={label}
            required={required}
            labelClassName={labelClassName}
        />
        <div className={`input-group flex-nowrap ${disabled ? 'disabled' : ''}`}>
            <span className="input-group-text">
                <a onClick={() => uploadRef.current.click()} className={`${disabled ? 'disabled' : ''}`}>
                    <i className="fa-solid fa-paperclip me-1" />{selectFileText}
                </a>
            </span>
            <div className={`${initialProps.className} ${className} ${disabled ? 'disabled' : ''}`}>
                <input
                    ref={uploadRef}
                    type={type}
                    id={id}
                    name={name}
                    onChange={(e) => onChange(e)}
                    style={{ display: 'none' }}
                    disabled={disabled}
                />
                <span title={handleGetTitle()} className={!handleGetFileName() ? 'opacity-50' : ''}>
                    {handleGetFileName() || handleGetPlaceholder()}
                </span>
                {isClearable && handleGetFileName() && (
                    <a onClick={(e) => onChange(e)} className={`text-danger float-end ms-1 ${disabled ? 'disabled' : ''}`}>
                        <i className="fa-solid fa-circle-xmark" />
                    </a>
                )}
            </div>
        </div>
        {isValid && <span className={`form-error ${validClassName}`}>{validMessage}</span>}
    </>);
}

export default FormUpload;
