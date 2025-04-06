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
 * @returns Component</>
 * @example
 * import FormMonth from "@/components/forms/FormMonth";
 * <FormMonth
 *    label="Time"
 *    id="time"
 *    name="time"
 *    value="01"
 *    onChange={() => {}}
 * />
 * @website https://reactdatepicker.com
 */
function FormMonth(props) {

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
        value = null,
        className = "",
        clearable = true,
        locale = "th",
        lang = "en",
        cancelLabel = "ยกเลิก",
        okLabel = "ตกลง",
        clearLabel = "ล้าง",
        displayFormat = "MM",
        dateFormat = "MMMM",
        timeIntervals = "1",
        onChange = () => { },
        autoComplete = "off",
        placeholder = "",
        isValid = false,
        validMessage = "",
        validClassName = "",
        isIcon = false,
        isClearable = true,
        maxDate = "", /* format: MM */
        minDate = "", /* format: MM */
        isInline = false,
        ...others
    } = props;

    let dateProps = {};
    if (props.maxDate !== undefined && maxDate) {
        if (lang === "en") {
            /* set maxDate for react-datepicker */
            dateProps = {
                ...dateProps,
                maxDate: new Date(moment().get("year"), moment(maxDate, displayFormat).get("month")),
            };
        }
    }

    if (props.minDate !== undefined && minDate) {
        if (lang === "en") {
            /* set minDate for react-datepicker */
            dateProps = {
                ...dateProps,
                minDate: new Date(moment().get("year"), moment(minDate, displayFormat).get("month")),
            };
        }
    }

    /* functions */
    const handleDateChangeRaw = (e) => {
        e.preventDefault();
    };

    const handleGetValue = () => {
        let result = null;
        if (value && value !== "01/01/0001" && value !== "Invalid date" && value?.length <= 2 && Number(value) === parseInt(value)) {
            result = new Date(moment().get("year"), moment(value, 'MM').get("month"))
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
                showMonthYearPicker
                showFullMonthYearPicker
                showTwoColumnMonthYearPicker
                renderCustomHeader={() => <span className="text-layout fw-bold">เดือน</span>}
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
                placeholderText={handleGetPlaceholder()}
                title={handleGetTitle()}
                autoComplete={autoComplete}
                {...dateProps}
                {...others}
            />
        </div>
        {isValid && <span className={`form-error ${validClassName}`}>{validMessage}</span>}
    </>);
}

export default FormMonth;
