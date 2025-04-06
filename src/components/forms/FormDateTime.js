import React from "react";
/* libs */
import moment from "moment";
// import { WatDatePicker } from "thaidatepicker-react";
import DatePicker, { registerLocale } from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import th from "date-fns/locale/th";
/* components */
import FormLabel from "./FormLabel";

registerLocale("th", th);

/**
 * @param props object{}
 * @returns Component<></>
 * @example
 * import FormDateTime from "components/forms/FormDateTime";
 * <FormDateTime
 *    label="Date Time"
 *    id="dateTime"
 *    name="dateTime"
 *    value="01/01/2023 12:00"
 *    onChange={() => {}}
 * />
 * @website https://reactdatepicker.com
 */
function FormDateTime(props) {

  /* initial */
  let initialProps = {
    className: "form-control text-layout" /* form-control-lg */,
  };

  const {
    label,
    required,
    labelClassName,
    title = "",
    name = "",
    value = null,
    className = "",
    clearable = true,
    locale = "th",
    lang = "en",
    cancelLabel = "ยกเลิก",
    okLabel = "ตกลง",
    clearLabel = "ล้าง",
    displayFormat = "DD/MM/YYYY HH:mm",
    dateFormat = "dd/MM/yyyy HH:mm",
    timeFormat = "HH:mm",
    timeIntervals = "1",
    onChange = () => { },
    autoComplete = "off",
    placeholder = "",
    isIcon = false,
    isClearable = true,
    maxDate = "", /* format: DD/MM/YYYY HH:mm */
    minDate = "",  /* format: DD/MM/YYYY HH:mm */
    isValid = false,
    validMessage = "",
    validClassName = "",
    ...others
  } = props;

  let dateProps = {};
  if (props.maxDate !== undefined && maxDate && maxDate !== "Invalid date") {
    if (lang === "en") {
      /* set maxDate for react-datepicker */
      dateProps = {
        ...dateProps,
        maxDate: new Date(
          moment(maxDate, displayFormat).get("year"),
          moment(maxDate, displayFormat).get("month"),
          moment(maxDate, displayFormat).get("date"),
          moment(maxDate, displayFormat).get("hour"),
          moment(maxDate, displayFormat).get("minute")
        ),
      };
    }
  }

  if (props.minDate !== undefined && minDate && minDate !== "Invalid date") {
    if (lang === "en") {
      /* set minDate for react-datepicker */
      dateProps = {
        ...dateProps,
        minDate: new Date(
          moment(minDate, displayFormat).get("year"),
          moment(minDate, displayFormat).get("month"),
          moment(minDate, displayFormat).get("date"),
          moment(minDate, displayFormat).get("hour"),
          moment(minDate, displayFormat).get("minute")
        ),
      };
    }
  }

  const handleDateChangeRaw = (e) => {
    e.preventDefault();
  };

  const handleGetValue = () => {
    let result = null;
    if (value && !value.includes("01/01/0001") && value !== "Invalid date" && moment(value, displayFormat).isValid()) {
      result = new Date(
        moment(value, displayFormat).get("year"),
        moment(value, displayFormat).get("month"),
        moment(value, displayFormat).get("date"),
        moment(value, displayFormat).get("hour"),
        moment(value, displayFormat).get("minute")
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
      {/* {lang.toLowerCase() === "th" && (
          <WatDatePicker
            name={name}
            value={value && value !== "01/01/0001" ? moment(value, displayFormat) : null}
            displayFormat={displayFormat}
            placeholder={props.placeholder !== undefined ? props.placeholder : props.label}
            onChange={(e) => {
              onChange({
                target: {
                  name: name,
                  value: e !== null ? moment(e).format(displayFormat) : "",
                },
              });
            }}
            clearable={isClearable}
            autoComplete={autoComplete}
            {...others}
          />
        )} */}

      {/* {lang.toLowerCase() === "en" && ( */}
      <DatePicker
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        // showTimeInput
        showTimeSelect
        // timeInputLabel="เวลา "
        timeCaption="เวลา"
        dropdownMode="select"
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
        timeIntervals={timeIntervals}
        dateFormat={dateFormat}
        timeFormat={timeFormat}
        dateFormatCalendar=" "
        isClearable={isClearable}
        autoComplete={autoComplete}
        placeholderText={handleGetPlaceholder()}
        title={handleGetTitle()}
        {...dateProps}
        {...others}
      />
      {/* )} */}
    </div>
    {isValid && <span className={`form-error ${validClassName}`}>{validMessage}</span>}
  </>);
}

export default FormDateTime;
