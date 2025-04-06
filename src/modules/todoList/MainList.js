import React from 'react';
import ItemButton from './ItemButton';

const MainList = ({ items, onItemClick }) => {
    return (
        <div className="card">
            <div className="card-header p-2 bg-dark text-white text-extra-title fw-bold text-center">
                <span>List</span>
            </div>
            {items.length > 0 && (
                <div className="card-body p-2">
                    <div className="d-grid gap-2">
                        {items.map(item => (
                            <li key={item.name} className="list-group-item text-center border-0 p-0">
                                <ItemButton
                                    item={item}
                                    onClick={onItemClick}
                                    className="btn btn-outline-dark w-100"
                                />
                            </li>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainList;