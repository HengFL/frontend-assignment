import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useParams } from "react-router-dom";
import useSidebar from "hooks/useSidebar";
import SidebarNav from "./SidebarNav";
// import SidebarFooter from "./SidebarFooter";

const Sidebar = ({ items }) => {

  const { isOpen, setIsOpen } = useSidebar();
  const params = useParams();

  /* useEffect */
  React.useEffect(() => {

    setIsOpen(true);
  
  }, [params]);

  return (
    <nav className={`sidebar ${!isOpen ? "collapsed" : ""}`}>
      <div className="sidebar-content bg-dark">
        <PerfectScrollbar>
          <a className="sidebar-brand text-start px-4 py-3" href="/home">
            <span className="align-middle me-3">
              {/* <img src={} width="95" /> */}
              {/* <span className="mx-2">x</span> */}
              <span className="text-header">Assignment</span>
            </span>
          </a>

          <SidebarNav items={items} />
          {/* <SidebarFooter /> */}
        </PerfectScrollbar>
      </div>
    </nav>
  );
};

export default Sidebar;
