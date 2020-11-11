import React from "react";
import { Redirect, useParams } from "react-router-dom";

import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ProductDetail = ({ products, deleteProduct }) => {
  // const productId = useParams().productId;
  const { productId } = useParams();
  const product = products.find((_product) => _product.id === +productId);

  if (!product) return <Redirect to="/products" />;

  return (
    <>
      <DetailWrapper>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p>{product.price}</p>
        <DeleteButton productId={product.id} deleteProduct={deleteProduct} />
      </DetailWrapper>
    </>
  );
};

export default ProductDetail;
