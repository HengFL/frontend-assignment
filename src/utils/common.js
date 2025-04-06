/* libs */
import moment from 'moment';
import numeral from "numeral";
/* storage */
import userInfoStorage from "storage/userInfoStorage";
/* shared */
import appConst from "shared/AppConst";
/* utils */
import dateTime from "./dateTime";

const baseURL = () => {
  let result = appConst.BASE_URL;
  if (window?.location?.hostname === "localhost" || window?.location?.hostname === "127.0.0.1") {
      result = "";
  }
  return result;
}

const checkSession = () => {
  let result = true;
  let userInfo = userInfoStorage.get();
  if (userInfo?.sessionExpired) {
    let nowDate = moment();
    let expiredDate = moment(userInfo?.sessionExpired);
    if (nowDate.isAfter(expiredDate)) {
      result = false;
    }
  }
  return result;
}

const genUniqueId = (length = 15) => {
  return [...Array(length).keys()].map(() => Math.random().toString(36).substr(2, 1)).join("");
}

const displayString = (data, initial = "") => {
  let result = initial;
  if (data || data === 0) {
    result = data?.toString()?.trim();
  }
  return result;
};

const displayCurrency = (data, initial = "") => {
  let result = initial;
  if (data || data === 0) {
    result = numeral(data).format("0,0.00");
  }
  return result;
};

const displayInt = (data, initial = "") => {
  let result = initial;
  if (data || data === 0) {
    result = numeral(data).format("0,0");
  }
  return result;
};

const displayFloat = (data, initial = "") => {
  let result = initial;
  if (data || data === 0) {
    result = numeral(data).format("0,0.00");
  }
  return result;
};

const displayDate = (data, format, leng, initial) => {
  let result = initial;
  if (data) {
    result = dateTime.displayDate(data, format, leng, initial);
  }
  return result;
};

const requestString = (data, initial = "") => {
  let result = initial;
  if (data || data === 0) {
    result = data?.toString()?.trim();
  }
  return result;
};

const requestDate = (data, initial = null) => {
  let result = initial;
  if (data && data !== "01/01/0001") {
    result = dateTime.displayDate(data, "YYYY-MM-DD");
  }
  return result;
};

const requestDateTime = (data, initial = null) => {
  let result = initial;
  if (data && !data.includes('01/01/0001')) {
    result = dateTime.displayDate(data, "");
  }
  return result;
}

const requestInt = (data, initial = null) => {
  let result = initial;
  if (data || data === 0) {
    result = parseInt(data);
  }
  return result;
};

const requestFloat = (data, initial = null) => {
  let result = initial;
  if (data || data === 0) {
    result = parseFloat(data);
  }
  return result;
};

const toInt = (data, initial = null) => {
  let result = initial;
  if (data || data === 0) {
    result = parseInt(data);
  }
  return result;
};

const toFloat = (data, initial = null) => {
  let result = initial;
  if (data || data === 0) {
    result = parseFloat(data);
  }
  return result;
};

const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const isEven = (number) => {
  return number % 2 === 0;
}

const isOdd = (number) => {
  return number % 2 !== 0;
}

const exportCommon = {
  baseURL: baseURL,
  checkSession: checkSession,
  genUniqueId: genUniqueId,
  displayString: displayString,
  displayInt: displayInt,
  displayFloat: displayFloat,
  displayCurrency: displayCurrency,
  displayDate: displayDate,
  requestDateTime: requestDateTime,
  requestString: requestString,
  requestDate: requestDate,
  requestInt: requestInt,
  requestFloat: requestFloat,
  toInt: toInt,
  toFloat: toFloat,
  isNumber: isNumber,
  isEven: isEven,
  isOdd: isOdd,
};

export default exportCommon;
