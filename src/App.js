import { useState } from "react";
import { GlobalStyle, ThemeButton, Title, Slogan, RestaurantImage } from "./styles";
import { ThemeProvider } from "styled-components";
import products from "./products";

// Components
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";


const theme = {
  light: {
    mainColor: "#242424",
    backgroundColor: "white",
    orange: "orangered",
  },
  dark: {
    mainColor: "white",
    backgroundColor: "#242424",
    orange: "orangered",
  }
};

function App() {
  const [currentTheme, setCurrentTheme] = useState ("light");
  const [product, setProduct] = useState(null);
  const toggleCurrentTheme = () => setCurrentTheme
  (currentTheme === "light" ? "dark" : "light");

  //Ternary Operator: an if statement in one line
  //Syntax: CONDITION ? TRUE : FALSE

  const setView = () => {
    if (product) return <ProductDetail product={product}/>
    else return <ProductList setProduct={setProduct}/>
  }

  return (
  <ThemeProvider theme={theme[currentTheme]}>
    <GlobalStyle />
    <ThemeButton onClick={toggleCurrentTheme}>
      {currentTheme === "light" ? "Dark" : "Light"} Mode
    </ThemeButton>

    <div>
      <RestaurantImage
      src="https://static.wixstatic.com/media/d6dda5_c0518621977b4080ac88925c41aac7ad~mv2.png/v1/fill/w_312,h_93,al_c,q_85,usm_0.66_1.00_0.01/d6dda5_c0518621977b4080ac88925c41aac7ad~mv2.webp"
      alt="Mishmash Logo" 
      />
      <Title>RESTAURANT</Title>
      <Slogan>MIX. MATCH. MUNCH.</Slogan>
    </div>
    {setView()}
  </ThemeProvider>
  );
}

export default App;
