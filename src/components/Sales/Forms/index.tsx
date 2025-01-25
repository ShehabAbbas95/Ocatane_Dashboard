import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Select from "antd/lib/select";
import Spin from "antd/lib/spin";

import { useEffect } from "react";
import { DatePicker } from "antd";
import { OrderStatus } from "../../../types/sale/OrderStatus";
import { Order } from "../../../types/sale/order";
import dayjs from "dayjs";

type OrderFormProps = {
  onSubmit: (values: Order) => void;
  isLoading: boolean;
  orderData: Order;
  close: () => void;
  fetchingOrder: boolean;
};

const OrderForm = ({
  onSubmit,
  isLoading,
  orderData,
  close,
  fetchingOrder,
}: OrderFormProps) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (orderData) {
      form.setFieldsValue({
        ...orderData,
        date: orderData?.date ? dayjs(orderData.date) : null, // Ensure it's a dayjs object
      });
    }
  }, [orderData, form]);

  const statusOptions = Object.values(OrderStatus).map((role) => ({
    label: role,
    value: role,
  }));

  return (
    <>
      <Spin spinning={fetchingOrder}>
        <Form
          className="form"
          layout="vertical"
          onFinish={(values: Order) => {
            onSubmit(values);
            form.resetFields();
          }}
          form={form}
          disabled={isLoading}
        >
          <Form.Item label="Order Id" name="id">
            <Input placeholder="User Id" disabled />
          </Form.Item>
          <Form.Item label="Name" name="customerName">
            <Input placeholder="Name" disabled />
          </Form.Item>
          <Form.Item label="Order Date" name="date">
            <DatePicker disabled format="DD/MM/YYYY" />
          </Form.Item>
          <Form.Item label="Status" name="status">
            <Select placeholder="Role" options={statusOptions} />
          </Form.Item>
          <Form.Item label="Total" name="total">
            <Input disabled />
          </Form.Item>
        </Form>
      </Spin>
      <Button
        className="submit_btn"
        onClick={() => form.submit()}
        loading={isLoading}
      >
        Update
      </Button>
      <Button
        className="reset_btn"
        onClick={() => {
          form.resetFields();
          close();
        }}
      >
        Cancel
      </Button>
    </>
  );
};

export default OrderForm;
