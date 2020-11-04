import ProductItem from './ProductItem'
import products from '../products'
import { ListWrapper } from '../styles'


//has to be in capital letter cuz component
const ProductList = () => {
    const productArray = products.map(product => (
        <ProductItem productObject={product} />
      ))

    return (
    <ListWrapper>   
        {productArray}
    </ListWrapper>
    )   
    }

export default ProductList;