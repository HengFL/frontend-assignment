/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { forwardRef } from "react";
import _ from "lodash";
import { NavLink } from "react-router-dom";
import { Badge, Collapse } from "react-bootstrap";
import ReactHtmlParser from 'react-html-parser';
/* hooks */
import useAuth from "hooks/useAuth";

const CustomRouterLink = forwardRef((props, ref) => (
  <React.Fragment ref={ref}>
    <NavLink {...props} />
  </React.Fragment>
));

const SidebarNavListItem = (props) => {

  const {
    title,
    type,
    href,
    depth = 0,
    children,
    icon: Icon,
    badge,
    open: openProp = false,
    isLogin,
  } = props;

  const { userInfo } = useAuth();

  const [open, setOpen] = React.useState(openProp);

  const handleToggle = () => {
    setOpen((state) => !state);
  };

  if (children) {
    return (
      <li className={`sidebar-item ${open ? "active" : ""}`}>
        <a
          className={`sidebar-link ${open ? "" : "collapsed"}`}
          data-bs-toggle="collapse"
          aria-expanded={open ? "true" : "false"}
          depth={depth}
          onClick={handleToggle}
        >
          {/* {Icon && <Icon className="feather align-middle" />}{" "} */}
          {Icon && <i className={Icon}></i>}{" "}
          <span className="align-middle" depth={depth}>
            {ReactHtmlParser(title)}
            {isLogin === true && _.isEmpty(userInfo) === true && <span className="badge bg-light text-dark text-extra-small ms-1">Login</span>}
            {isLogin === true && userInfo?.isSkip === true && <span className="badge bg-light text-dark text-extra-small ms-1">Login</span>}
            {type === 'NEW' && <span className="badge bg-danger text-extra-small ms-1">new</span>}
            {type === 'COMING_SOON' && <span className="badge bg-secondary text-extra-small ms-1">Coming Soon</span>}
          </span>
          {badge && (
            <Badge className="badge-sidebar-primary" bg="" size={18}>
              {badge}
            </Badge>
          )}
          {open ? <div /> : <div />}
        </a>
        <Collapse in={open}>
          <ul className="sidebar-dropdown list-unstyled">{children}</ul>
        </Collapse>
      </li>
    );
  }

  return (
    <li className="sidebar-item">
      <CustomRouterLink
        depth={depth}
        to={href}
        activeclassname="active"
        className="sidebar-link"
      >
        {/* {Icon && <Icon className="feather align-middle" />}{" "} */}
        {Icon && <i className={Icon}></i>}{" "}
        <span className="align-middle" depth={depth}>
          {ReactHtmlParser(title)}
          {isLogin === true && _.isEmpty(userInfo) === true && <span className="badge bg-light text-dark text-extra-small ms-1">Login</span>}
          {isLogin === true && userInfo?.isSkip === true && <span className="badge bg-light text-dark text-extra-small ms-1">Login</span>}
          {type === 'NEW' && <span className="badge bg-danger text-extra-small ms-1">New</span>}
          {type === 'COMING_SOON' && <span className="badge bg-secondary text-extra-small ms-1">Coming Soon</span>}
        </span>
        {badge && (
          <Badge className="badge-sidebar-primary" bg="" size={18}>
            {badge}
          </Badge>
        )}
      </CustomRouterLink>
    </li>
  );
};

export default SidebarNavListItem;
