import React from "react";
/* layouts */
import AuthLayout from "./layouts/Auth";
import DashboardLayout from "./layouts/Dashboard";
/* todoList */
import TodoList from "./pages/todoList";
/* users */
import Users from "./pages/users";

const routes = [
  {
    path: "/",
    // element: <AuthLayout />,
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        // element: <Login />,
        element: <TodoList />,
      },
    ],
  },
  {
    path: "todo_list",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <TodoList />,
      },
    ],
  },
  {
    path: "users",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Users />,
      },
    ],
  },
];

export default routes;
