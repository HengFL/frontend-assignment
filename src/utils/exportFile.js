import moment from "moment";
import FileSaver from "file-saver";
import XlsxPopulate from "xlsx-populate";
import { utils, write } from "xlsx";
/* shared */
import { xlsxFile, csvFile } from "shared/FileConst";
// import fileUtil from "./fileUtil";
import common from "./common";

/**
 * @param headers array[]
 * @param rowData array[]
 * @param fileName string
 * @param isBorder boolean default true 
 * @param isHeaderBold boolean default true 
 * @example
 * import exportFile from "@/utils/exportFile";
 * const headers = [
 *  {
 *   key: "name",
 *   label: "Name",
 *   type: "string", // string, currency, int, float, date, datetime
 *   headerAlign: "center", // left, center, right
 *   width: 12,
 *  }
 * ]
 * const exportExcel = (rowData) => {
 *   let fileName = `EXAMPLE.xlsx`;
 *   exportFile.exportXLSX(headers, rowData, fileName);
 * };
 */
const exportXLSX = (headers, rowData, fileName, isBorder = true, isHeaderBold = true) => {
  // console.log("handleExportExcel rowData : ", rowData);
  if (!fileName) {
    fileName = `${moment().format("YYMMDD-HHmmss")}${xlsxFile.type}`;
  }
  XlsxPopulate.fromBlankAsync().then(async (workbook) => {
    const sheet1 = workbook.sheet(0);
    const sheetData = getSheetData(headers, rowData);
    // console.log("excel sheetData : ", sheetData)
    if (headers.length > 0) {
      headers.forEach((value, index) => {
        let column = getIntToLetter(index);
        sheet1.column(column).width(value.width);
        if (value.headerAlign) {
          sheet1.range(`${column}1:${column}1`).style("horizontalAlignment", value.headerAlign).style("verticalAlignment", value.headerAlign);
        }
        if (value.align) {
          sheet1.range(`${column}2:${column}${sheetData.length}`).style("horizontalAlignment", value.align).style("verticalAlignment", value.align);
        }
        if (value.type === "currency") {
          sheet1.range(`${column}2:${column}${sheetData.length}`).style("numberFormat", `#,##0.00`);
        }
        if (value.type === "int") {
          sheet1.range(`${column}2:${column}${sheetData.length}`).style("numberFormat", `#,##0`);
        }
        if (value.type === "float") {
          sheet1.range(`${column}2:${column}${sheetData.length}`).style("numberFormat", `#,##0.00`);
        }
        if (value.type === "date") {
          sheet1.range(`${column}2:${column}${sheetData.length}`).style("numberFormat", `dd/MM/yyyy`);
        }
        if (value.type === "datetime") {
          sheet1.range(`${column}2:${column}${sheetData.length}`).style("numberFormat", `dd/MM/yyyy hh:mm`);
        }
      });
    }
    sheet1.cell("A1").value(sheetData);
    const range = sheet1.usedRange();
    if (isHeaderBold) {
      sheet1.row(1).style("bold", true);
    }
    if (isBorder) {
      range.style("border", true);
    }
    return workbook.outputAsync().then((res) => {
      FileSaver.saveAs(res, fileName);
    });
  });
};

/**
 * @param headers array[]
 * @param rowData array[]
 * @param fileName string
 * @example
 * import exportFile from "@/utils/exportFile";
 * const headers = [
 *  {
 *   key: "name",
 *   label: "Name",
 *   type: "string", // string, date, datetime
 *  }
 * ]
 * const exportExcel = (rowData) => {
 *   let fileName = `EXAMPLE.csv`;
 *   exportFile.exportCSV(headers, rowData, fileName);
 * };
 */
const exportCSV = (headers, rowData, fileName) => {
  console.log("handleExportExcel rowData : ", rowData);
  if (!fileName) {
    fileName = `${moment().format("YYMMDD-HHmmss")}${csvFile.type}`;
  }
  let header = Object.keys(headers[0]);
  let mapRowData = rowData.map((v) => {
    let result = {};
    header.forEach((k) => {
      result = { ...result, [k]: v[k] };
    });
    return result;
  });
  const ws = utils.json_to_sheet(headers, { header: header, skipHeader: true, origin: 0 });
  utils.sheet_add_json(ws, mapRowData, { header: header, skipHeader: true, origin: -1 });
  const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
  const excelBuffer = write(wb, { bookType: "csv", type: "array" });
  const data = new Blob([excelBuffer], { type: csvFile.mimeType });
  FileSaver.saveAs(data, fileName);
};

const getSheetData = (headers, rowData) => {
  let sheetData = rowData.map((v) => {
    let result = [];
    headers.forEach((k) => {
      if (k.type === "date") {
        result.push(common.displayDate(v[k.key], "DD/MM/YYYY", "en", ""));
      }
      else if (k.type === "datetime") {
        result.push(common.displayDate(v[k.key], "DD/MM/YYYY HH:mm", "en", ""));
      }
      else {
        result.push(v[k.key]);
      }
    });
    return result;
  });
  sheetData.unshift(headers.map((k) => k.label));
  return sheetData;
};

function getIntToLetter(num) {
  let letters = ''
  while (num >= 0) {
    letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[num % 26] + letters
    num = Math.floor(num / 26) - 1
  }
  return letters
}

const exportExportFile = {
  exportXLSX,
  exportCSV,
};

export default exportExportFile;
