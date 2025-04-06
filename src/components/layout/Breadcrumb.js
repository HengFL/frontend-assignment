import React from "react";
/* libs */
import { NavLink, useNavigate } from "react-router-dom";

const BreadcrumbComponent = ({ showBackPage = false, breadcrumbItems = [] }) => {

    /* libs */
    const navigate = useNavigate();

    return (
        <div className="row mb-1">
            <div className="col-10">
                <nav className="" aria-label="breadcrumb">
                    <ol className="breadcrumb mb-1">
                        {breadcrumbItems?.map((value, index) => {
                            if (value.active) {
                                return <li key={index} className="breadcrumb-item active fw-bold text-layout">{value.title}</li>
                            }
                            else if (value.disabled) {
                                return <li key={index} className="breadcrumb-item disabled fw-bold text-layout">{value.title}</li>
                            }
                            else if (value.path) {
                                return (
                                    <li key={index} className="breadcrumb-item">
                                        <NavLink to={value.path} className=" fw-bold text-layout">{value.title}</NavLink>
                                    </li>
                                )
                            }
                            else {
                                return <li key={index} className="breadcrumb-item disabled fw-bold text-layout">{value.title}</li>
                            }
                        })}
                    </ol>
                </nav >
            </div>
            <div className="col-2 text-end">
                {showBackPage && (
                    <button type="button" onClick={() => navigate(-1)} className="btn btn-primary btn-sm rounded rounded-pill min-w-85px shadow">
                        <i className="fa-solid fa-angle-left"></i>
                        <span className="ms-1">ย้อนกลับ</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default BreadcrumbComponent;
