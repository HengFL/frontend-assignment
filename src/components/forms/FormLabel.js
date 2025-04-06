
import React from "react";
/* libs */
import ReactHtmlParser from 'react-html-parser';

/**
 * @param props object{}
 * @returns Component</>
 * @example
 * import FormLabel from "@/components/forms/FormLabel";
 * <FormLabel
 *    label="Example"
 * />
 */
function FormLabel(props) {

    const {
        label,
        required = false,
        labelClassName = '',
    } = props;

    return (<>
        {label !== undefined && (
            <label className={`form-label ${labelClassName}`}>
                <span>{ReactHtmlParser(label.toString())}</span>
                {required && <span className="text-danger"> *</span>}
            </label>
        )}
    </>)
}

export default FormLabel;