import { TableColumnsType } from "antd";
import { Order } from "../../../types/sale/order";
import dayjs from "dayjs";

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
    render: (date: string) => dayjs(date).format("DD/MM/YYYY"),
  },
  {
    title: "Total",
    dataIndex: "total",
  },
];
