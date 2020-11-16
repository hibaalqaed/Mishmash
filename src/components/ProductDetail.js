//React
import { observer } from "mobx-react";
import { Redirect, useParams } from "react-router-dom";

//Class
import productStore from "../stores/productStore";

//Components
import DeleteButton from "./buttons/DeleteButton";

//Styles
import { DetailWrapper } from "../styles";

const ProductDetail = () => {
  const { productSlug } = useParams(); // const productId = useParams().productId;
  const product = productStore.products.find(
    (product) => product.slug === productSlug
  );

  if (!product) return <Redirect to="/products" />;

  return (
    <>
      <DetailWrapper>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p>{product.price}</p>
        <DeleteButton productSlug={product.slug} />
      </DetailWrapper>
    </>
  );
};

export default observer(ProductDetail);
