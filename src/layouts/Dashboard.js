import React from "react";
/* libs */
import { Outlet } from "react-router-dom";
/* components */
import Wrapper from "../components/Wrapper";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/Main";
import Navbar from "../components/navbar/Navbar";
import Content from "../components/Content";
// import Footer from "../components/Footer";
import Settings from "../components/Settings";
import dashboardItems from "../components/sidebar/dashboardItems";
/* utils */
import role from "utils/role";

const Dashboard = ({ children }) => {
  // let items = role.getMenuItem(dashboardItems);
  let items = dashboardItems;
  return (
    <React.Fragment>
      <Wrapper>
        <Sidebar items={items} />
        <Main>
          <Navbar />
          <Content>
            {children}
            <Outlet />
          </Content>
          {/* <Footer />*/}
        </Main>
      </Wrapper>
      <Settings />
    </React.Fragment>
  );
}
export default Dashboard;
