import { TableColumnsType } from "antd";
import { User } from "../../../types/admin/Users";

export const columns: TableColumnsType<User> = [
  {
    title: "User Id",
    dataIndex: "userId",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Role",
    dataIndex: "role",
  },
  {
    title: "Active",
    dataIndex: "active",
    render: (blocked: number) => (blocked ? "Yes" : "No"),
  },
];
