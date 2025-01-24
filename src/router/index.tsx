/* eslint-disable @typescript-eslint/no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import UserManagement from "../pages/admin/UserManagment";

const router = createBrowserRouter([
  {
    path: "/users",
    element: <UserManagement />,
    index: true,
  },
  {
    path: "/orders",
    // use user management for now
    element: <UserManagement />,
  },
]);

export default router;
