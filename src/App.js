import { useState } from "react";
import ProductList from "./components/ProductList";
import { GlobalStyle, ThemeButton, Title, Slogan, RestaurantImage } from "./styles";
import { ThemeProvider } from "styled-components";

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
  // const [counter, setCounter] = useState(0)
  // const handleIncrement = () => setCounter(counter+1);
  // const handleDecrement = () => setCounter(counter-1);

  const [currentTheme, setCurrentTheme] = useState ("light");
  const toggleCurrentTheme = () => setCurrentTheme
  (currentTheme === "light" ? "dark" : "light");

  //Ternary Operator: an if statement in one line
  //Syntax: CONDITION ? TRUE : FALSE
  
  return (
  <ThemeProvider theme={theme[currentTheme]}>
    <GlobalStyle />
    <ThemeButton onClick={toggleCurrentTheme}>
      {currentTheme === "light" ? "Dark" : "Light"} Mode
    </ThemeButton>
    {/* <button onClick={handleIncrement}>+1</button>
    {counter}
    <button onClick={handleDecrement }>-1</button> */}
    <div>
      <RestaurantImage
      src="https://static.wixstatic.com/media/d6dda5_c0518621977b4080ac88925c41aac7ad~mv2.png/v1/fill/w_312,h_93,al_c,q_85,usm_0.66_1.00_0.01/d6dda5_c0518621977b4080ac88925c41aac7ad~mv2.webp"
      alt="Mishmash Logo" 
      />
      <Title>RESTAURANT</Title>
      <Slogan>MIX. MATCH. MUNCH.</Slogan>
    </div>
      <ProductList/>
  </ThemeProvider>
  );
}

export default App;
