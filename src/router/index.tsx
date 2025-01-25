import { createBrowserRouter } from "react-router-dom";
import UserManagement from "../pages/admin/UserManagment";

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
    element: <UserManagement />,
  },
]);

export default router;
