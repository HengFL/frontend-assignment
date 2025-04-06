import React from 'react';

const ItemButton = ({ item, onClick, className = '' }) => {
  return (
    <a className={`item ${item.type.toLowerCase()} ${className}`} onClick={() => onClick(item)}>
      {item.name}
    </a>
  );
};

export default ItemButton;