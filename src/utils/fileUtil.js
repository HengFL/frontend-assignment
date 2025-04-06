const convertFileToBase64 = (file) => {
    return new Promise(resolve => {
        let result = "";
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            result = reader.result.split(',').pop();
            resolve(result);
        };
    });
};

const convertFileToArray = (file) => {
    return new Promise(resolve => {
        let result = "";
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
            result = reader.result.split('\r\n');
            resolve(result);
        };
    });
};


const convertFileSizeToMB = (size) => {
    let result = 0;
    if (size) {
        result = (size / 1024 / 1024);
    }
    return result;
}

const getFileType = (name) => {
    let result = 0;
    if (name) {
        result = name.toLowerCase().split('.').pop()
    }
    return result;
}

const validateFileType = (uploadFile, type) => {
    let result = false;
    if (uploadFile.type.includes(type) || (uploadFile.type.includes('[number]') && Number.isInteger(parseInt(type)))) {
        result = true
    }
    return result;
}

const exportUploadFile = {
    convertFileToBase64: convertFileToBase64,
    convertFileToArray: convertFileToArray,
    convertFileSizeToMB: convertFileSizeToMB,
    getFileType: getFileType,
    validateFileType: validateFileType,
}

export default exportUploadFile;