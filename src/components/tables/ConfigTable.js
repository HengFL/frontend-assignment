
import common from "utils/common";

const options = (page, sizePerPage, total) => {
    return {
        page: page,
        sizePerPage: sizePerPage,
        totalSize: total,
        firstPageText: "หน้าแรก",
        prePageText: "ก่อนหน้า",
        nextPageText: "ถัดไป",
        lastPageText: "หน้าสุดท้าย",
        paginationSize: 3,
        showTotal: true,
        hideSizePerPage: true,
        paginationTotalRenderer: customTotal,
    }
}

const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">แสดง <b>{common.displayInt(from)}</b> ถึง <b>{common.displayInt(to)}</b> จาก <b>{common.displayInt(size)}</b> ทั้งหมด</span>
);

const order = (rowIndex) => {
    let result = rowIndex + 1;
    return common.displayInt(result)
}

const paginOrder = (rowIndex, page, sizePerPage) => {
    let result = (sizePerPage * (page - 1) + (rowIndex + 1));
    return common.displayInt(result)
}

const exportConfigTable = {
    options: options,
    order: order,
    paginOrder: paginOrder
}

export default exportConfigTable;