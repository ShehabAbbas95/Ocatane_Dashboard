import { useState } from "react";
import { Link } from "react-router-dom";

import GlobalModal from "../../components/generic/Modal";
import OrdersTable from "../../components/Sales/OrdersTable";
import {
  useDeleteOrderMutation,
  useGetOrderByIdQuery,
  useGetOrdersQuery,
  useUpdateOrderMutation,
} from "../../store/sales/ordersApi";
import OrderForm from "../../components/Sales/Forms";
import { Order } from "../../types/sale/order";

const SalesOrderManagement = () => {
  const [userId, setUserId] = useState<string>();
  const [openModal, setOpenModal] = useState(false);
  const { data: ordersData, isFetching: loadingOrders } = useGetOrdersQuery({});
  const orders = ordersData;
  const { data: orderData, isFetching: fetchingOrder } = useGetOrderByIdQuery(
    userId,
    { skip: !userId }
  );

  const [updateOrder, { isLoading: updating }] = useUpdateOrderMutation();
  const [deleteOrder, { isLoading: deleting }] = useDeleteOrderMutation();
  const handleUpdateUser = (values: Order) => {
    updateOrder({ ...values })
      .unwrap()
      .then(() => {
        setOpenModal(false);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };
  const handleDeleteUser = (id: string) => {
    deleteOrder(id)
      .unwrap()
      .then(() => {})
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Link to="/orders">Orders</Link>

      <OrdersTable
        handleOpenModal={setOpenModal}
        orderData={orders}
        handleUserIdChange={setUserId}
        handleDeleteOrder={handleDeleteUser}
        loading={loadingOrders}
        deleting={deleting}
      />

      <GlobalModal
        title="Update User"
        open={openModal}
        handleClose={handleCloseModal}
      >
        <OrderForm
          orderData={orderData}
          isLoading={updating}
          onSubmit={handleUpdateUser}
          close={handleCloseModal}
          fetchingOrder={fetchingOrder}
        />
      </GlobalModal>
    </>
  );
};

export default SalesOrderManagement;
