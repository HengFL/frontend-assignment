import download from 'downloadjs';
import moment from 'moment';

function downloadPDFFromURL(url, fileName) {
    let rename = renamePDF(fileName);
    var x = new XMLHttpRequest();
    x.open("GET", url, true);
    x.responseType = 'blob';
    x.onload = function (e) { download(x.response, rename, "application/pdf"); }
    x.send();
}

function downloadPDFFromBase64(base64, fileName) {
    let rename = renamePDF(fileName);
    let base64PDF = "data:application/pdf;base64," + base64;
    let downloadLink = document.createElement("a");
    downloadLink.href = base64PDF;
    downloadLink.download = rename;
    downloadLink.click();
}

const renamePDF = (fileName) => {
    let result = fileName;
    if (!fileName) {
        result = `${moment().format('YYMMDDHHmmss')}.pdf`;
    }
    if (fileName.indexOf(".pdf") === -1) {
        result = `${fileName}-${moment().format('YYMMDDHHmmss')}.pdf`;
    }
    return fileName;
}

const exportDownload = {
    downloadPDFFromURL: downloadPDFFromURL,
    downloadPDFFromBase64: downloadPDFFromBase64
}

export default exportDownload;