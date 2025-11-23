import { useState } from "react";
import ProductDetail from "../components/ProductDetail";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Button, Popconfirm, Table } from "antd";
import { Link } from "react-router";
export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}
const Product = () => {
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Action",
      key: "Action",
      render: (record: IProduct) => {
        return (
          <div>
            <div>
              <Link to={`/product/update/${record.id}`}>
                <Button color="yellow" variant="solid">
                  Update
                </Button>
              </Link>
            </div>
            <Popconfirm
              title="Are you sure Delete"
              onConfirm={() => mutation.mutate(record.id)}
              onCancel={() => console.log("Hủy xóa")}
            >
              <Button color="red" variant="solid">
                {" "}
                Delete
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
  const getProduct = async () => {
    const response = await axios.get("http://localhost:3000/products");
    return response.data;
  };
  const query = useQuery({ queryKey: ["products"], queryFn: getProduct });
  console.log("query", query.data);

  const deleteProduct = async (id: number) => {
    try {
      const res = await axios.delete(`http://localhost:3000/products/${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  return (
    <>
      <Table dataSource={query?.data} columns={columns} />
    </>
  );
};

export default Product;
