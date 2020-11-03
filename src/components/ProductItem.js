import { ProductWrapper } from '../styles'


const ProductItem = (props) => {
    return (
        <ProductWrapper>
          <img
            src= {props.productObject.image}
            alt={props.productObject.name}/>
          <p>{props.productObject.name}</p>
          <p>{props.productObject.price}</p>
        </ProductWrapper>
    )
}

export default ProductItem;