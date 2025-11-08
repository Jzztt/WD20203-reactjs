import { useState } from "react";
import ProductDetail from "../components/ProductDetail";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Table } from "antd";
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

  ];
  const getProduct = async () => {
    const response = await axios.get("http://localhost:3000/products");
    return response.data;
  };
  const query = useQuery({ queryKey: ["products"], queryFn: getProduct });
  console.log("query", query.data);
  return (
    <>
      <Table dataSource={query?.data} columns={columns} />;
    </>
  );
};

export default Product;
