import ProductList from "./components/ProductList";
import { GlobalStyle, Title, Slogan, RestaurantImage } from "./styles";
import { ThemeProvider } from "styled-components";

    // <head>
    //   <title>Mishmash Restautant</title>
    // </head>

const theme = {
  mainColor: "#242424",
  backgroundColor: "white",
  orange: "orangered",
};

function App() { 
  return (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
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
