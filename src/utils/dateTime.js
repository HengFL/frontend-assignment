import moment from 'moment';
import 'moment/locale/th';
/**
 * @param dateTime string
 * @param format string
 * @param lang string default 'en' 
 * @returns string
 * @remark support parameter format 
 * - Date : 'DD/MM/YYYY', 'DD-MM-YYYY',
 * - DateTime : 'YYYY/MM/DD HH:mm:ss', 'YYYY-MM-DD HH:mm:ss'
 */
const displayDate = (dateTime, format, lang = 'en') => {
    let display = '';
    try {
        moment.locale(lang);
        if (dateTime) {
            let splitDateTime = dateTime.split(/[ T\s]/);
            let date = splitDateTime[0].replace(/\//g, '-');
            let time = splitDateTime[1];
            let year = date.split('-')[0].length === 4 ? date.split('-')[0] : date.split('-')[2];
            let month = date.split('-')[1];
            let day = date.split('-')[0].length === 4 ? date.split('-')[2] : date.split('-')[0];
            let mapDate = year + '-' + month + '-' + day;
            if (splitDateTime.length === 1) { /* date */
                display = moment(mapDate).format(format);
            }
            else { /* date time */
                display = moment(mapDate + ' ' + time).format(format);
            }
            if (lang?.toLowerCase() === 'th') {
                display = display.replace(year, (parseInt(year) + 543))
            }
        }
    }
    catch (error) {
        console.log('displayDate : ', error);
        display = dateTime;
    }
    return display;
}

/**
 * @param dateTime string
 * @param fromFormat string
 * @param toFormat string
 * @param lang string default 'en' 
 * @returns string
 */
const changeFormatDate = (dateTime, fromFormat, toFormat, lang = 'en') => {
    let display = '';
    try {
        moment.locale(lang);
        if (dateTime) {
            display = moment(dateTime, fromFormat).format(toFormat);
            if (lang.toLowerCase() === 'th') {
                let year = display.split(/[/-\s.]/).find(v => v.length === 4);
                display = display.replace(year, (parseInt(year) + 543))
            }
        }
    }
    catch (error) {
        console.log('changeFormatDate : ', error);
        display = dateTime;
    }
    return display;
}

/**
 * @param dateTime string
 * @param lang string default 'en' 
 * @returns string
 */
const relativeTime = (dateTime, lang = 'en') => {
    let display = '';
    try {
        if (dateTime) {
            moment.locale(lang);
            display = moment(dateTime, "DD/MM/YYYY HH:mm:ss").fromNow();
        }
    }
    catch (error) {
        console.log('relativeTime : ', error);
        display = dateTime;
    }
    return display;
}

function msToString(val, lang = "en", local = "th") {
    // moment.locale(local);
    let tempTime = moment.duration(val),
        timeObj = {
            years: tempTime.years(),
            months: tempTime.months(),
            days: tempTime.days(),
            hrs: tempTime.hours(),
            mins: tempTime.minutes(),
            secs: tempTime.seconds(),
            ms: tempTime.milliseconds()
        },
        timeArr = [];
    for (let k in timeObj) {
        if (Number(timeObj[k]) > 0) {
            timeArr.push(`${timeObj[k]} ${k}`)
        }
    }
    return timeArr.join(' ');
}

const dateTime = {
    displayDate: displayDate,
    changeFormatDate: changeFormatDate,
    relativeTime: relativeTime,
    msToString: msToString,
}

export default dateTime;