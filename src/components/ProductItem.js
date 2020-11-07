import { ProductWrapper } from '../styles'
import DeleteButton from "./buttons/DeleteButton"

const ProductItem = (props) => {
  const product = props.product;
  

    return (
        <ProductWrapper>
          <img
          onClick={() => props.setProduct(product)}
            src= {product.image}
            alt={product.name}/>
          <p>{product.name}</p>
          <p className="product-price">{product.price}</p>
        <DeleteButton productId={product.id} deleteProduct={props.deleteProduct}/>
        </ProductWrapper>
    )
}

export default ProductItem;