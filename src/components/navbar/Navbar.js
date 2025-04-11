import React from "react";
/* libs */
import { Navbar, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
/* hooks */
import useSidebar from "hooks/useSidebar";
/* components */
import NavbarUser from "./NavbarUser";
/* shared */
import AppConst from "shared/AppConst";
/* utils */
import device from "utils/device";

const NavbarComponent = () => {
  const { isOpen, setIsOpen } = useSidebar();
  const location = useLocation();

  /* state */
  const [pageTitle, setPageTitle] = React.useState('');

  /* useEffect */
  // React.useEffect(() => {
  //   // console.log("document.title ", document.getElementsByTagName("title"))
  //   setTimeout(() => {
  //     let textTitle = document.getElementsByTagName("title")[0]?.text;
  //     if (textTitle) {
  //       textTitle = textTitle?.replace(`${AppConst.APP_SHORT_NAME} - `, '')
  //       setPageTitle(textTitle);
  //     }
  //   }, 10)
  // }, [location]);

  return (
    <Navbar variant="light" expand className="navbar-bg shadow">
      <span
        className="sidebar-toggle d-flex"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <i className="hamburger align-self-center" />
      </span>
      {/* <span className="text-title text-dark fw-bold mx-1">{pageTitle}</span> */}

      {/*<Form inline="true" className="d-none d-sm-inline-block">
        <InputGroup className="input-group-navbar">
          <Form.Control placeholder={t("Search")} aria-label="Search" />
          <Button variant="">
            <Search className="feather" />
          </Button>
        </InputGroup>
      </Form>*/}

      <Navbar.Collapse>
        <Nav className="navbar-align">
          {/* <NavbarDropdown
            header="New Messages"
            footer="Show all messages"
            icon={MessageCircle}
            count={messages.length}
            showBadge
          >
            {messages.map((item, key) => {
              return (
                <NavbarDropdownItem
                  key={key}
                  icon={
                    <img
                      className="avatar img-fluid rounded-circle"
                      src={item.avatar}
                      alt={item.name}
                    />
                  }
                  title={item.name}
                  description={item.description}
                  time={item.time}
                  spacing
                />
              );
            })}
          </NavbarDropdown>

          <NavbarDropdown
            header="New Notifications"
            footer="Show all notifications"
            icon={BellOff}
            count={notifications.length}
          >
            {notifications.map((item, key) => {
              let icon = <Bell size={18} className="text-warning" />;

              if (item.type === "important") {
                icon = <AlertCircle size={18} className="text-danger" />;
              }

              if (item.type === "login") {
                icon = <Home size={18} className="text-primary" />;
              }

              if (item.type === "request") {
                icon = <UserPlus size={18} className="text-success" />;
              }

              return (
                <NavbarDropdownItem
                  key={key}
                  icon={icon}
                  title={item.title}
                  description={item.description}
                  time={item.time}
                />
              );
            })}
          </NavbarDropdown>
          <NavbarLanguages />*/}
          {/* <NavbarUser /> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
