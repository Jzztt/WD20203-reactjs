import { useState } from "react";
import ProductDetail from "../components/ProductDetail";
export interface IProduct{
  id: number,
  name: string,
  price: number,
  description: string,
  category: string
}
const Product = () => {
  // const [state, setState] = useState<kiểu dữ liệu>(giá trị khởi tạo)
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      name: "Iphone 17 Promax",
      price: 3000,
      description: "This is Iphone 17 Promax",
      category: "smart phone",
    },
    {
      id: 2,
      name: "Samsung Galaxy S50",
      price: 2500,
      description: "This is Samsung Galaxy S50",
      category: "smart phone",
    },
  ]);
  return (
    <>
      <ProductDetail products={products} />
    </>
  );
};

export default Product;
