import { TableColumnsType } from "antd";
import { Order } from "../../../types/sale/order";

export const columns: TableColumnsType<Order> = [
  {
    title: "Order Id",
    dataIndex: "id",
  },
  {
    title: "Customer Name",
    dataIndex: "customerName",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Order Date",
    dataIndex: "orderDate",
    render: (active: boolean) => (active ? "Yes" : "No"),
  },
  {
    title: "Total",
    dataIndex: "total",
  },
];
