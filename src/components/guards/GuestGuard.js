import * as React from "react";
import { Navigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

function GuestGuard({ children }) {
  const { isAuthenticated, isInitialized, logout } = useAuth();

  if (isInitialized && isAuthenticated) {
    logout();
    return <Navigate to="/" />;
  }
  return <React.Fragment>{children}</React.Fragment>;
}

export default GuestGuard;
