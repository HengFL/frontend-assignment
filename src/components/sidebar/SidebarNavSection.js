import React from "react";

import SidebarNavList from "./SidebarNavList";

const SidebarNavSection = (props) => {
  const { title, pages, className, ...rest } = props;

  return (
    <React.Fragment {...rest}>
      {title && <li className="sidebar-header">{title}</li>}
      {/* <li className="sidebar-header pt-1"></li> */}
      <SidebarNavList pages={pages} depth={0} />
      {/* <li className="pb-3"></li> */}
    </React.Fragment>
  );
};

export default SidebarNavSection;
