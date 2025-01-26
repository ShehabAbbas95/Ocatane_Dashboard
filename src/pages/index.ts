import { lazy } from "react";

const UserManagement = lazy(() => import("../pages/admin/UserManagment"));
const SalesOrderManagment = lazy(
  () => import("../pages/sales/SalesOrderManagment")
);
export {
  // Admin routes
  UserManagement,
  // Sales routes
  SalesOrderManagment,
};
