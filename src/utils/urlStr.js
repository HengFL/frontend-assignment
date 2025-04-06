const setQueryParams = (query, url = window.location.href) => {
    // console.log("setQueryParams query : ", query);
    let urlObj = new URL(url);
    if (query) {
        if (Object.keys(query).length > 0) {
            Object.keys(query).forEach(key => {
                if (Array.isArray(query[key]) && query[key].length > 0) {
                    urlObj.searchParams.set(key, JSON.stringify(query[key]));
                }
                else if (typeof query[key] === 'object' && Object.keys(query[key]).length > 0) {
                    urlObj.searchParams.set(key, JSON.stringify(query[key]));
                }
                else if (query[key] || query[key] === 0) {
                    urlObj.searchParams.set(key, query[key]);
                }
            })
        }
    }
    return urlObj;
}

const getQueryParams = (url = window.location.href) => {
    // console.log("getQueryParams url  : ", url);
    let urlObj = new URL(url);
    let params = Object.fromEntries(new URLSearchParams(urlObj.search));
    if (Object.keys(params).length > 0) {
        Object.keys(params).forEach(key => {
            if (params[key].includes('[')) {
                params[key] = JSON.parse(params[key])
            }
            else if (params[key].includes('\"')) {
                params[key] = JSON.parse(params[key])
            }
            else {
                params[key] = params[key]
            }
        })
    }
    return params;
}

const removeQueryParams = (url = window.location.href) => {
    // console.log("removeQueryParams url  : ", url);
    const urlObj = new URL(url);
    urlObj.search = '';
    urlObj.hash = '';
    return urlObj.toString();
}

const encodeQueryParams = (query) => {
    // console.log("encodeQueryParams query : ", query);
    let result = {};
    if (query) {
        if (Object.keys(query).length > 0) {
            Object.keys(query).forEach(key => {
                if (Array.isArray(query[key]) && query[key].length > 0) {
                    result = { ...result, [key]: JSON.stringify(query[key]) }
                }
                else if (typeof query[key] === 'object' && Object.keys(query[key]).length > 0) {
                    result = { ...result, [key]: JSON.stringify(query[key]) }
                }
                else if (query[key] || query[key] === 0) {
                    result = { ...result, [key]: query[key] }
                }
            })
        }
    }
    return result;
}

const decodeQueryParams = (query) => {
    // console.log("decodeQueryParams query  : ", query);
    let result = {};
    if (query) {
        if (Object.keys(query).length > 0) {
            Object.keys(query).forEach(key => {
                if (query[key].includes('[')) {
                    result = { ...result, [key]: JSON.parse(query[key]) }

                }
                else if (query[key].includes('\"')) {
                    result = { ...result, [key]: JSON.parse(query[key]) }
                }
                else {
                    result = { ...result, [key]: query[key] }
                }
            })
        }
    }
    return result;
}

const exportUrlStr = {
    setQueryParams: setQueryParams,
    getQueryParams: getQueryParams,
    removeQueryParams: removeQueryParams,
    encodeQueryParams: encodeQueryParams,
    decodeQueryParams: decodeQueryParams,
};

export default exportUrlStr;