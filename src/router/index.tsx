import { createBrowserRouter } from "react-router-dom";
import { UserManagement } from "../pages/index";
import { SalesOrderManagment } from "../pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserManagement />,
    index: true,
  },
  {
    path: "/users",
    element: <UserManagement />,
  },
  {
    path: "/orders",
    // use user management for now
    element: <SalesOrderManagment />,
  },
]);

export default router;
