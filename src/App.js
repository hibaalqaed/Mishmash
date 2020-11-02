import styles from './styles'
import ProductList from "./components/ProductList";


    // <head>
    //   <title>Mishmash Restautant</title>
    // </head>

function App() {
  
  return (
  <div>
    <div>
      <img 
      style={styles.restaurantImage} 
      src="https://static.wixstatic.com/media/d6dda5_c0518621977b4080ac88925c41aac7ad~mv2.png/v1/fill/w_312,h_93,al_c,q_85,usm_0.66_1.00_0.01/d6dda5_c0518621977b4080ac88925c41aac7ad~mv2.webp"
      alt="Mishmash Logo" 
      />
      <h1 style={styles.text}>MISHMASH</h1>
      <h4 style={styles.text}>MIX. MATCH. MUNCH.</h4>
    </div>

    <div>
      <ProductList/>
    </div> 
  </div>
  );
}

export default App;
