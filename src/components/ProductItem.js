import { Link } from "react-router-dom";
import { ProductWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ProductItem = ({ product, deleteProduct }) => {
  // const product = props.product;
  // const { product } = props;
  return (
    <ProductWrapper>
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <p>{product.name}</p>
      <p className="product-price">{product.price}</p>
      <DeleteButton productId={product.id} deleteProduct={deleteProduct} />
    </ProductWrapper>
  );
};

export default ProductItem;
