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
 * import FormDate from "@/components/forms/FormDate";
 * <FormDate
 *    label="Date"
 *    id="date"
 *    name="date"
 *    value="01/01/2023"
 *    onChange={() => {}}
 * />
 * @website https://reactdatepicker.com
 */
function FormDate(props) {

  /* initial */
  let initialProps = {
    className: "form-control text-layout" /* form-control-lg */,
  };

  const {
    label,
    labelClassName,
    required,
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
    displayFormat = "DD/MM/YYYY",
    onChange = () => { },
    autoComplete = "off",
    placeholder = "",
    isValid = false,
    validMessage = "",
    validClassName = "",
    isIcon = false,
    isClearable = true,
    maxDate = "",  /* format: DD/MM/YYYY */
    minDate = "",  /* format: DD/MM/YYYY */
    isInline = false,
    ...others
  } = props;

  let dateProps = {};
  if (props.maxDate !== undefined && maxDate) {
    if (lang === "en") {
      /* set maxDate for react-datepicker */
      dateProps = {
        ...dateProps,
        maxDate: new Date(
          moment(maxDate, displayFormat).get("year"),
          moment(maxDate, displayFormat).get("month"),
          moment(maxDate, displayFormat).get("date")
        ),
      };
    }
  }

  if (props.minDate !== undefined && minDate) {
    if (lang === "en") {
      /* set minDate for react-datepicker */
      dateProps = {
        ...dateProps,
        minDate: new Date(
          moment(minDate, displayFormat).get("year"),
          moment(minDate, displayFormat).get("month"),
          moment(minDate, displayFormat).get("date")
        ),
      };
    }
  }

  /* functions */
  const handleDateChangeRaw = (e) => {
    e.preventDefault();
  };

  const handleGetValue = () => {
    let result = null;
    if (value && !value.includes("01/01/0001") && value !== "Invalid date" && moment(value, displayFormat).isValid()) {
      result = new Date(
        moment(value, displayFormat).get("year"),
        moment(value, displayFormat).get("month"),
        moment(value, displayFormat).get("date")
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
        scrollableYearDropdown
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
        dateFormat="dd/MM/yyyy"
        dateFormatCalendar=" "
        isClearable={isClearable}
        placeholderText={handleGetPlaceholder()}
        title={handleGetTitle()}
        autoComplete={autoComplete}
        {...dateProps}
        {...others}
      />
      {/* )} */}
    </div>
    {isValid && <span className={`form-error ${validClassName}`}>{validMessage}</span>}
  </>);
}

export default FormDate;
