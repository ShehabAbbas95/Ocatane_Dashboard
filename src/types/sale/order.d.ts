import { OrderStatus } from "./OrderStatus";

interface Order {
  id: string;
  name: string;
  status: OrderStatus;
  total: number;
  date: Date;
}
