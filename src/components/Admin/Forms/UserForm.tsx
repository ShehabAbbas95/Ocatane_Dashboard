import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Switch from "antd/lib/switch";

import { User } from "../../../types/admin/Users";
import { useEffect } from "react";

type UserFormProps = {
  onSubmit: (values: User) => void;
  isLoading: boolean;
  userData?: User;
  close: () => void;
};

const UserForm = ({ onSubmit, isLoading, userData, close }: UserFormProps) => {
  const [form] = Form.useForm();
  useEffect(() => {
    if (userData) {
      form.setFieldsValue(userData);
    }
  }, [userData, form]);
  console.log(userData);

  return (
    <>
      <Form
        className="form"
        layout="vertical"
        onFinish={(values: User) => {
          onSubmit(values);
          form.resetFields();
        }}
        form={form}
      >
        <Form.Item label="User Id" name="id">
          <Input placeholder="User Id" disabled={true} />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              pattern: new RegExp(/^[a-zA-Z\s]{8,}$/),
              message:
                "Please enter a valid name (letters only, min of 8 chars)",
              min: 8,
              max: 32,
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              pattern: new RegExp(/^\S+@\S+\.\S+$/),
              message: "Please enter a valid email",
            },
          ]}
        >
          <Input placeholder="Email" type="email" />
        </Form.Item>

        <Form.Item label="Active" name="isActive" valuePropName="checked">
          <Switch defaultChecked />
        </Form.Item>
      </Form>
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

export default UserForm;
