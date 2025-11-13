import React from "react";
import { Button, Form, Input, Select } from "antd";

const CreateProduct = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Create Product</h1>
      <Form layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please input your Name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "Please input your Price!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: "Please input your Category!" }]}
        >
          <Select placeholder="Enter your category">
            <Select.Option value="smartphone">Smart Phone</Select.Option>
            <Select.Option value="laptop">Laptop</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateProduct;
