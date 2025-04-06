import ReactHtmlParser from 'react-html-parser';

export const DataNotFound = ({ message = 'ไม่พบข้อมูล', className = "", loading = false }) => {
    return (
        <div className={`position-absolute top-50 start-50 w-100 text-center text-layout opacity-75 my-2 ${className}`}>
            {loading && (
                <div className="d-flex align-items-center justify-content-center">
                    <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                    <span className="ms-1">กำลังโหลด...</span>
                </div>
            )}
            {!loading && <span>{message}</span>}
        </div>
    )
}

export const DataNotSearch = ({ message = 'กรุณาค้นหาข้อมูล' }) => {
    return (<>
        <div className="d-flex justify-content-center pt-3">
            <p className="text-title fw-normal opacity-50">{message}</p>
        </div>
    </>)
}

export const FormatterEditor = ({ text = '', editable = true, className = "" }) => {
    return (<>
        {editable && (
            <div className="position-relative" style={{ top: '-6px' }}>
                <i className={`fa-solid fa-pen-to-square position-absolute top-0 end-0 ms-1 cursor-pointer text-super-extra-small text-dark-gray ${className}`}></i>
            </div>
        )}
        {text !== undefined && <span>{ReactHtmlParser(text.toString())}</span>}
    </>)
}

export const exportCustomTable = {
    DataNotFound: DataNotFound,
    DataNotSearch: DataNotSearch,
    FormatterEditor: FormatterEditor,
}

export default exportCustomTable;