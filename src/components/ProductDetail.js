// React
import { observer } from "mobx-react";
import { Redirect, useParams } from "react-router-dom";

// Stores
import productStore from "../stores/productStore";

// Components
import DeleteButton from "./buttons/DeleteButton";

// Styling
import { DetailWrapper } from "../styles";

const ProductDetail = () => {
  const { productId } = useParams(); // const productId = useParams().productId;
  const product = productStore.products.find(
    (product) => product.id === +productId
  );

  if (!product) return <Redirect to="/products" />;

  return (
    <>
      <DetailWrapper>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p>{product.price}</p>
        <DeleteButton productId={product.id} />
      </DetailWrapper>
    </>
  );
};

export default observer(ProductDetail);
