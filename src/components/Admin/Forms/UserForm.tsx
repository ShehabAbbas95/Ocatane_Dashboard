import { Button, Form, Input, Select } from "antd";

import { User } from "../../../types/admin/Users";

type UserFormProps = {
  onSubmit: (values: User) => void;
  close: () => void;
  isLoading: boolean;
  userData?: User;
};

const UserForm = ({ onSubmit, isLoading, userData }: UserFormProps) => {
  const [form] = Form.useForm();

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
        <Form.Item label="User Id" name="userId">
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

        {userData && (
          <Form.Item label="Block User" name="isActive">
            <Select
              placeholder="Select"
              options={[
                { label: "Yes", value: true },
                { label: "No", value: false },
              ]}
            />
          </Form.Item>
        )}
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
        }}
      >
        Cancel
      </Button>
    </>
  );
};

export default UserForm;
