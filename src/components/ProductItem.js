import { Link } from "react-router-dom";
import { ProductWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ProductItem = ({ product }) => {
  return (
    <ProductWrapper>
      <Link to={`/products/${product.slug}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <p>{product.name}</p>
      <p className="product-price">{product.price}</p>
      <DeleteButton productSlug={product.slug} />
    </ProductWrapper>
  );
};

export default ProductItem;
