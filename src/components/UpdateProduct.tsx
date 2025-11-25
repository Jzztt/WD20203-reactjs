import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import type { IProduct } from "../pages/Product";

const UpdateProduct = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const getProduct = async () => {
    const { data } = await axios.get(`http://localhost:3000/products/${id}`);
    return data;
  };
  const query = useQuery({
    queryKey: ["product", id],
    queryFn: getProduct,
  });
  useEffect(() => {
    if (!query.data) return;
    form.setFieldsValue(query.data);
  }, [query.data]);

  const updateProduct = async (product: Omit<IProduct,"id">) => {
    const { data } = await axios.put(
      `http://localhost:3000/products/${id}`,
      product
    );
    return data;
  };
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      navigate("/product");
    },
  });

  const handleUpdate = (data: Omit<IProduct,"id">) => {
    mutation.mutate(data);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Update Product</h1>
      <Form layout="vertical" form={form} onFinish={handleUpdate}>
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

export default UpdateProduct;
