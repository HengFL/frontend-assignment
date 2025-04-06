import React from "react";
/* libs */
import moment from "moment";
// import { WatDatePicker } from "thaidatepicker-react";
import DatePicker, { registerLocale } from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import 'moment/locale/th';
import th from "date-fns/locale/th";
/* components */
import FormLabel from "./FormLabel";

registerLocale("th", th);

/**
 * @param props object{}
 * @returns Component<></>
 * @example
 * import FormTime from "components/forms/FormTime";
 * <FormTime
 *    label="Time"
 *    id="time"
 *    name="time"
 *    value="08:00"
 *    onChange={() => {}}
 * />
 * @website https://reactdatepicker.com
 */

function FormTime(props) {

    /* initial */
    let initialProps = {
        className: "form-control text-layout" /* form-control-lg */,
    };

    const {
        label,
        required,
        labelClassName,
        title = "",
        type = "text",
        name = "",
        value = null,
        className = "",
        clearable = true,
        locale = "th",
        lang = "en",
        cancelLabel = "ยกเลิก",
        okLabel = "ตกลง",
        clearLabel = "ล้าง",
        displayFormat = "HH:mm",
        dateFormat = "HH:mm",
        timeIntervals = "1",
        onChange = () => { },
        autoComplete = "off",
        placeholder = "",
        isIcon = false,
        isClearable = true,
        maxTime = "", /* format: HH:mm */
        minTime = "", /* format: HH:mm */
        isValid = false,
        validMessage = "",
        validClassName = "",
        ...others
    } = props;

    let timeProps = {};
    if (props.maxTime !== undefined && maxTime && maxTime !== "Invalid date") {
        if (lang === "en") {
            /* set maxTime for react-datepicker */
            timeProps = {
                ...timeProps,
                maxTime: new Date(
                    moment().get("year"),
                    moment().get("month"),
                    moment().get("date"),
                    parseInt(maxTime.split(':')[0]),
                    parseInt(maxTime.split(':')[1]),
                ),
            };
        }
    }

    if (props.minTime !== undefined && minTime && minTime !== "Invalid date") {
        if (lang === "en") {
            /* set minTime for react-datepicker */
            timeProps = {
                ...timeProps,
                minTime: new Date(
                    moment().get("year"),
                    moment().get("month"),
                    moment().get("date"),
                    parseInt(minTime.split(':')[0]),
                    parseInt(minTime.split(':')[1]),
                ),
            };
        }
    }

    const handleDateChangeRaw = (e) => {
        e.preventDefault();
    };

    const handleGetValue = () => {
        let result = null;
        if (value && value !== "01/01/0001" && value !== "Invalid date" && value.includes(':')) {
            result = new Date(
                moment().get("year"),
                moment().get("month"),
                moment().get("date"),
                parseInt(value.split(':')[0]),
                parseInt(value.split(':')[1]),
            )
        }
        return result;
    }

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
        <div className={`${initialProps.className} ${className} ${props.disabled ? "disabled" : ""}`}>
            <DatePicker
                showTimeSelect
                showTimeSelectOnly
                dropdownMode="select"
                timeCaption="เวลา"
                name={name}
                selected={handleGetValue()}
                onChange={(e) => {
                    onChange({
                        target: {
                            name: name,
                            value: e !== null ? moment(e).format(displayFormat) : "",
                        },
                    });
                }}
                onChangeRaw={(e) => handleDateChangeRaw(e)}
                locale={locale}
                dateFormat={dateFormat}
                timeIntervals={timeIntervals}
                dateFormatCalendar=" "
                isClearable={isClearable}
                autoComplete={autoComplete}
                placeholderText={handleGetPlaceholder()}
                title={handleGetTitle()}
                {...timeProps}
                {...others}
            />
        </div>
        {isValid && <span className={`form-error ${validClassName}`}>{validMessage}</span>}
    </>);
}

export default FormTime;
