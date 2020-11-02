import items from './items'
import styles from './styles'


    // <head>
    //   <title>Mishmash Restautant</title>
    // </head>

function App() {
  const itemsList = items.map(item => (
    <div style={styles.item} key={item.id}>
      <img
        style={styles.itemImage}
        src= {item.image}
        alt={item.name}/>
      <p style={styles.text}>{item.name}</p>
      <p style={styles.text}>{item.price}</p>
      <p style={styles.text}>{item.id}</p>
    </div>
  ))

  return (
  <div>
      <div>
      <img 
      style={styles.restImage} 
      src="https://static.wixstatic.com/media/d6dda5_c0518621977b4080ac88925c41aac7ad~mv2.png/v1/fill/w_312,h_93,al_c,q_85,usm_0.66_1.00_0.01/d6dda5_c0518621977b4080ac88925c41aac7ad~mv2.webp"
      alt="Mishmash Logo" 
      />
      <h1 style={styles.text}>MISHMASH</h1>
      <h4 style={styles.text}>MIX. MATCH. MUNCH.</h4>
      </div>

    <div style={styles.list}>
    {itemsList}
    </div> 
  </div>
  );
}

export default App;
