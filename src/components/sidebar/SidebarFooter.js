import React from "react";
/* shared */
import AppConst from "shared/AppConst";

const SidebarFooter = () => {
  return (
    <div className="sidebar-cta position-absolute bottom-0 start-50 translate-middle-x">
      <div className="w-100">
        <div className="sidebar-cta-content text-center py-2 m-2">
          <p className="text-extra-small opacity-50 mb-0">เวอร์ชัน {AppConst.APP_VERSION}</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarFooter;
