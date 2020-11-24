import { Link } from "react-router-dom";
import { ProductWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

import { observer } from "mobx-react";

const ProductItem = ({ product }) => {
  return (
    <ProductWrapper>
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <p>{product.name}</p>
      <p className="product-price">KWD {product.price}</p>
      <UpdateButton oldProduct={product} />
      <DeleteButton productId={product.id} />
    </ProductWrapper>
  );
};

export default observer(ProductItem);
