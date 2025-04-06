import React from "react";
import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider, Helmet } from "react-helmet-async";
/* contexts */
import { ThemeProvider } from "./contexts/ThemeContext";
import { SidebarProvider } from "./contexts/SidebarContext";
import { LayoutProvider } from "./contexts/LayoutContext";
import { AuthProvider } from "./contexts/JWTContext";
/* redux */
import { store } from "./redux/store";
/* shared */
import AppConst from "./shared/AppConst";
/* utils */
import consoleLog from './utils/consoleLog';
/* src */
import routes from "./routes";
/* utils */
import common from 'utils/common';

const App = () => {
  consoleLog.ready();
  const content = useRoutes(routes);
  return (
    <HelmetProvider>
      <div
        className="loading"
        style={{
          backgroundImage: "url(" + common.baseURL() + "/img/loading/rolling.gif" + ")",
        }}
      >
        <p>Loading...</p>
      </div>
      <Helmet titleTemplate={`${AppConst.APP_SHORT_NAME} - %s`} />
      <Helmet>
        <meta name="description" content={`Version ${AppConst.APP_VERSION}`} />
        <link rel="icon" type="image/x-icon" href={common.baseURL() + "/favicon.ico"} />
        <link rel="stylesheet" href={common.baseURL() + "/libs/fontawesome/css/all.min.css"} />
        <link rel="stylesheet" href={common.baseURL() + "/css/light.css"} />
        <link rel="stylesheet" href={common.baseURL() + "/css/custom.css"} />
      </Helmet>
      <Provider store={store}>
        <ThemeProvider>
          <SidebarProvider>
            <LayoutProvider>
              <AuthProvider>{content}</AuthProvider>
            </LayoutProvider>
          </SidebarProvider>
        </ThemeProvider>
      </Provider>
    </HelmetProvider>
  );
};

export default App;
