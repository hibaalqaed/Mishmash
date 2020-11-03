import ProductItem from './ProductItem'
import products from '../products'
import { ListWrapper } from '../styles'


//has to be in capital letter
const ProductList = () => {
    const ProductList = products.map(product => (
        <ProductItem productObject={product} />
      ))

    return (
    <ListWrapper>   
        {ProductList}
    </ListWrapper>
    )   
    }

export default ProductList;