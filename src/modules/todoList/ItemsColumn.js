import React, { useEffect } from 'react';
/* modules */
import ItemButton from './ItemButton';

const ItemsColumn = ({ type, items, onItemClick, autoMoveBack }) => {

    /* useEffect */
    useEffect(() => {
        if (!autoMoveBack) return;

        const timers = items.map(item => {
            return setTimeout(() => autoMoveBack(item), 5000);
        });

        return () => {
            timers.forEach(timer => clearTimeout(timer));
        };
    }, [items, autoMoveBack]);

    return (
        <div className="card">
            <div className="card-header p-2 bg-secondary text-white text-extra-title fw-bold text-center">
                <span>{type}</span>
            </div>
            {items.length > 0 && (
                <div className="card-body p-2">
                    <div className="d-grid gap-2">
                        {items.map(item => (
                            <li key={item.name} className="list-group-item text-center border-0 p-0">
                                <ItemButton
                                    item={item}
                                    onClick={onItemClick}
                                    className="btn btn-outline-secondary w-100"
                                />
                            </li>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemsColumn;