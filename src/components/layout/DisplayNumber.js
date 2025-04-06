import React from "react";
/* libs */
import numeral from "numeral";
import CountUp from 'react-countup';

/**
 * @param number number or string
 * @param type string default "int" (more: "float", "currency", "int-percent", "float-percent")
 * @param format string (library: Numeral.js)
 * @param isCountUp Boolean default false
 * @param zeroIsEmpty Boolean default false
 * @param minusClassName string default "text-danger"
 * @param initial number or string
 * 
 * @returns Component
 * 
 * @example
 * import DisplayNumber from "@/components/layout/DisplayNumber";
 * 
 * <DisplayNumber number={1000} type="currency" />
 * 
 * @website http://numeraljs.com/
 */
const DisplayNumber = ({
    number = '',
    type = 'int',
    format = '',
    isCountUp = false,
    zeroIsEmpty = false,
    minusClassName = "text-danger",
    initial = '',
    ...others
}) => {

    /* functions */
    const handleDisplayNumber = (num) => {
        let result = initial;
        if (num || (zeroIsEmpty === false && num === 0)) {
            if (format) {/* custom */
                result = numeral(num).format(format);
            }
            else if (type === 'int') {
                result = numeral(num).format("0,0");
            }
            else if (type === 'float') {
                result = numeral(num).format("0,0.00");
            }
            else if (type === 'currency') {
                result = numeral(num).format("0,0.00");
            }
            else if (type === 'int-percent') {
                result = numeral(num).format("0,0") + '%';
            }
            else if (type === 'float-percent') {
                result = numeral(num).format("0,0.00") + '%';
            }
            else {
                result = numeral(num).format("0,0");
            }
        }
        return result
    }

    const handleClassName = () => {
        let result = ''
        if (handleIsNumber(number)) {
            if (parseFloat(number) < 0) {
                result = minusClassName;
            }
        }
        return result
    }

    const handleIsNumber = (n) => {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    const handleCountUpDecimals = () => {
        let result = 0;
        if (type === 'float') {
            result = 2;
        }
        else if (type === 'currency') {
            result = 2;
        }
        else if (type === 'float-percent') {
            result = 2;
        }
        return result;
    }

    // const handleCountUpSuffix = () => {
    //     let result = '';
    //     if (type === 'int-percent') {
    //         result = '%';
    //     }
    //     else if (type === 'float-percent') {
    //         result = '%';
    //     }
    //     return result;
    // }

    return (<>
        {(() => {
            if (isCountUp === true) {
                return (
                    <CountUp
                        className={handleClassName()}
                        start={number / 2}
                        end={number}
                        decimals={handleCountUpDecimals()}
                        // suffix={handleCountUpSuffix()}
                        formattingFn={(value) => handleDisplayNumber(value)}
                        {...others}
                    />
                )
            } else {
                return <span className={handleClassName()}>{handleDisplayNumber(number)}</span>
            }
        })()}
    </>)
}

export default DisplayNumber
