import { useCallback } from "react";
import GlobalTable from "../../generic/Table";
import { columns } from "./columns";
import { Order } from "../../../types/sale/order";

interface OrdersTableProps {
  orderData: Order[];
  handleUserIdChange: (id: string) => void;
  handleOpenModal: (isOpen: boolean) => void;
  handleDeleteOrder: (id: string) => void;
  loading: boolean;
  deleting: boolean;
}

const OrdersTable: React.FC<OrdersTableProps> = ({
  orderData,
  handleOpenModal,
  handleUserIdChange,
  handleDeleteOrder,
  loading,
  deleting,
}) => {
  const handleEdit = useCallback(
    (record: Order) => () => {
      handleOpenModal(true);
      handleUserIdChange(record.id);
    },
    [handleOpenModal, handleUserIdChange]
  );
  const onDelete = useCallback(
    (id: string) => () => {
      handleDeleteOrder(id);
    },
    [handleDeleteOrder]
  );

  const actions = [
    {
      title: "Actions",
      dataIndex: "edit",
      render: (_: unknown, record: Order) => (
        <div className="table_action_btn">
          <span
            style={{ color: "green", cursor: "pointer" }}
            onClick={handleEdit(record)}
          >
            Edit
          </span>

          <span
            style={{ color: "red", marginLeft: "5px", cursor: "pointer" }}
            onClick={onDelete(record.id)}
          >
            Delete
          </span>
        </div>
      ),
    },
  ];
  return (
    <GlobalTable
      withSearch={true}
      rowKeyName="id"
      loading={loading || deleting}
      data={orderData}
      columns={[...columns, ...actions]}
    />
  );
};

export default OrdersTable;
