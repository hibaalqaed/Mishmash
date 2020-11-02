import ProductItem from './ProductItem'
import products from '../products'
import styles from '../styles'


//has to be in capital letter
const ProductList = () => {
    const ProductList = products.map(product => (
        <ProductItem productObject={product} />
      ))

    return (
    <div style={styles.list}>   
        {ProductList}
    </div>
    )   
    }


export default ProductList;