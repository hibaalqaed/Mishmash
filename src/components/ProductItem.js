import { ProductWrapper } from '../styles'

const ProductItem = (props) => {
    return (
        <ProductWrapper>
          <img
          onClick={() => props.setProduct(props.productObject)}
            src= {props.productObject.image}
            alt={props.productObject.name}/>
          <p>{props.productObject.name}</p>
          <p className="product-price">{props.productObject.price}</p>
        </ProductWrapper>
    )
}

export default ProductItem;