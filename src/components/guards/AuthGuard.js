import * as React from "react";
/* libs */
import _ from "lodash";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
/* components */
import dashboardItems from "components/sidebar/dashboardItems";
/* hooks */
import useAuth from "hooks/useAuth";
/* utils */
// import role from "utils/role";

// For routes that can only be accessed by authenticated users
function AuthGuard({ children }) {

  const { isAuthenticated, isInitialized, userInfo } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  /* check role */

  if (!_.isEmpty(userInfo)) {
    if (location.pathname?.includes("new_password") === false) {
      // let items = role.getMenuItem(dashboardItems);
      let items = dashboardItems;
      if (items?.length > 0) {
        let pathname = [];
        let checkPath = location?.pathname;
        let splitPath = location.pathname?.split('/');
        if (splitPath?.length > 2) {
          checkPath = splitPath?.slice(0, 2)?.join("/");;
        }
        items.forEach(item => {
          item.pages?.forEach(page => {
            if (page?.children?.length > 0) {
              page?.children?.forEach(child => {
                pathname.push(child?.href);
              })
            }
            else {
              pathname.push(page?.href);
            }
          })
        });
        if (pathname?.filter(v => v?.includes(checkPath))?.length === 0) {
          navigate("/auth/403");
        }
      }
      else {
        navigate("/auth/403");
      }
    }
  }
  if (isInitialized && !isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  return <React.Fragment>{children}</React.Fragment>;

}

export default AuthGuard;
