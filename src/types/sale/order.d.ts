interface Order {
  id: string;
  name: string;
  status: OrderStatus;
  total: number;
  date: Date;
}
export enum OrderStatus {
  PENDING = "pending",
  SHIPPED = "Shipped",
  DELIVERED = "delivered",
  CANCELLED = "cancelled",
}
