import styles from '../styles'
const ProductItem = (props) => {
    return (
        <div style={styles.product} key={props.productObject.id}>
          <img
            style={styles.productImage}
            src= {props.productObject.image}
            alt={props.productObject.name}/>
          <p style={styles.text}>{props.productObject.name}</p>
          <p style={styles.text}>{props.productObject.price}</p>
        </div>
    )
}

export default ProductItem;