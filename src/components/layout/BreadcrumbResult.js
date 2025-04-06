import React from "react";

const BreadcrumbResultComponent = ({
    title = "ผลลัพธ์",
    items = [], /* label, value */
}) => {

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item text-dark text-small">
                    <b>{title}</b>
                </li>
                {items?.filter(f => f.value)?.map((item, index) => (
                    <li key={index} className="breadcrumb-item text-dark text-small">
                        {item.label}<b className="ms-1">{item.value}</b>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default BreadcrumbResultComponent;
