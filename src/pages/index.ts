import { lazy } from "react";

const UserManagement = lazy(() => import("../pages/admin/UserManagment"));
export {
  // Admin routes
  UserManagement,
  //   Orders,
};
