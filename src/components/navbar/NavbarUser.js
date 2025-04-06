import React from "react";
/* libs */
import _ from "lodash";
/* bootstrap */
import * as Iconbootstrap from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
// import { PieChart, Settings, User } from "react-feather";
/* hooks */
import useAuth from "hooks/useAuth";

const NavbarUser = () => {

  /* libs */
  const navigate = useNavigate();
  const auth = useAuth();
  const userInfo = auth.userInfo;

  /* functions */
  const handleOnLogout = async () => {
    await auth.logout();
    await navigate("/");
  }

  return (
    <Dropdown className="nav-item" align="end">
      <span className="d-inline-block d-sm-none">
        <Dropdown.Toggle as="a" className="nav-link">
          {/* <Settings size={18} className="align-middle" /> */}
          <span className="text-white bg-dark rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '30px', height: '30px' }}>
            <Iconbootstrap.PersonFill size={21} />
          </span>
        </Dropdown.Toggle>
      </span>
      <span className="d-none d-sm-inline-block">
        {(() => {
          if (_.isEmpty(userInfo) || userInfo?.isSkip === true) {
            return (<>
              <button type="button" onClick={() => navigate('/auth/login')} className="btn btn-blue btn-sm mt-1 ms-1">
                <i className="fa-solid fa-right-to-bracket"></i>
                <span className="ms-2">เข้าสู่ระบบ</span>
              </button>
            </>)
          }
        })()}

        {!_.isEmpty(userInfo) && !userInfo?.isSkip && (<>
          <Dropdown.Toggle as="a" className="nav-link sidebar-icon-arrow-none py-0 pe-0 d-flex">
            <div className="d-flex">
              <div className="col-auto d-flex align-items-center">
                <span className="text-white bg-dark rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '30px', height: '30px' }}>
                  <Iconbootstrap.PersonFill size={21} />
                </span>
              </div>
              <div className="col-10 lh-1">
                <p className="text-dark text-small mb-2"><b>{userInfo?.fullname}</b></p>
                <p className="text-dark text-small text-gray mb-0">รหัสพนักงาน: <b>{userInfo?.userId}</b></p>
              </div>
            </div>
            <div className="ms-2 text-end align-self-center">
              <i className="fa-solid fa-angle-down text-title"></i>
            </div>
          </Dropdown.Toggle>
        </>)}
      </span>

      <Dropdown.Menu drop="end" className="p-0" style={{ minWidth: '15rem' }}>
        <Dropdown.Item className="d-flex bg-dark rounded-top pe-none p-3">
          {/* <User size={18} className="align-middle me-2" /> */}
          <div className="col-auto mt-1 align-self-center">
            <span className="text-dark bg-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '40px', height: '40px' }}>
              <Iconbootstrap.PersonFill size={27} />
            </span>
          </div>
          <div className="col-10 ps-1">
            <p className="text-white text-title mb-0">{userInfo?.fullname}</p>
            <p className="text-white text-layout mb-0">รหัสพนักงาน: {userInfo?.userId}</p>
            <p className="text-white text-layout mb-0">ตำแหน่ง: {userInfo?.positionName}</p>
          </div>
        </Dropdown.Item>
        {/* <Dropdown.Divider /> */}
        <div className="p-1">
          <Dropdown.Item onClick={() => navigate('/auth/change_password')} className="text-layout p-2">
            <i className="fa-solid fa-lock"></i>
            <span className="ms-2">เปลี่ยนรหัสผ่าน</span>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleOnLogout()} className="text-layout p-2">
            <i className="fa-solid fa-right-from-bracket"></i>
            <span className="ms-2">ออกจากรระบบ</span>
          </Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NavbarUser;
