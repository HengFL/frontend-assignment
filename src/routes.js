import React from "react";
/* layouts */
// import AuthLayout from "./layouts/Auth";
import DashboardLayout from "./layouts/Dashboard";
/* Home */
import Home from "./pages/home";
/* todoList */
// import TodoList from "./pages/todoList";
/* users */
// import Users from "./pages/users";

const routes = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
];

export default routes;
