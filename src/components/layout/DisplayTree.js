import React from "react";
/* libs */
import TreeView, { flattenTree } from "react-accessible-treeview";

const DisplayTree = ({
    folder,
    defaultExpandedIds = [],
    className = 'bg-dark',
    isArrowIcon = true,
    isFolderIcon = false,
    ...others
}) => {

    const data = flattenTree(folder);

    return (<>
        <TreeView
            data={data}
            // aria-label="Controlled expanded node tree"
            defaultExpandedIds={defaultExpandedIds}
            className={className}
            nodeRenderer={({
                element,
                isBranch,
                isExpanded,
                isDisabled,
                getNodeProps,
                level,
                handleExpand,
            }) => {
                return (
                    <div
                        {...getNodeProps({ onClick: handleExpand })}
                        style={{
                            marginLeft: 40 * (level - 1),
                            opacity: isDisabled ? 0.5 : 1,
                        }}
                    >
                        {isBranch && isArrowIcon && <ArrowIcon isOpen={isExpanded} />}
                        {isBranch && isFolderIcon && <FolderIcon isOpen={isExpanded} />}
                        {/* {!isBranch && isArrowIcon && <span className="me-3"></span>}
                        {!isBranch && isFolderIcon && <span className="me-4"></span>} */}
                        {!isBranch && <div style={{ width: '1.4rem', display: 'inline-block' }}></div>}
                        <span className="name">
                            {/* {element.name}-{element.id} */}
                            {element.name}
                        </span>
                    </div>
                );
            }}
            {...others}
        />
    </>)
}

const FolderIcon = ({ isOpen }) => {
    return (
        <span className="text-gray" style={{ width: '1.4rem', display: 'inline-block' }}>
            {isOpen ? <i className="fa-solid fa-folder-open"></i> : <i className="fa-solid fa-folder"></i>}
        </span>
    )
};

const ArrowIcon = ({ isOpen }) => {
    return (
        <span className="text-gray ps-1" style={{ width: '1.4rem', display: 'inline-block' }}>
            {isOpen ? <i className="fa-solid fa-sort-down"></i> : <i className="fa-solid fa-caret-right"></i>}
        </span>
    )
};

export default DisplayTree;
