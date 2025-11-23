import React from "react";
import { useParams } from "react-router";

const UpdateProduct = () => {
  const { id } = useParams();
  console.log(id);

  return <div>UpdateProduct</div>;
};

export default UpdateProduct;
