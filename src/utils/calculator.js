// import _ from "lodash";

const sum = (arr) => {
    let result = 0;
    if (arr.length > 0) {
        arr = arr.map(v => v ? parseFloat(v) : 0);
        result = arr.reduce((a, b) => a + b, 0);
    }
    return parseFloat(result);
}

const percent = (score, total) => {
    let result = 0;
    if (total > 0) {
        result = (parseFloat(score) / parseFloat(total)) * 100;
    }
    return result;
}

const exportCalculator = {
    sum: sum,
    percent: percent,
}

export default exportCalculator;