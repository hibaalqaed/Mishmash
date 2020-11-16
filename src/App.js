import { useState } from "react";
import { Route, Switch } from "react-router";
import products from "./products";
// Styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

// Components
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import NavBar from "./components/NavBar";

const theme = {
  light: {
    mainColor: "#242424",
    backgroundColor: "white",
    orange: "orangered",
    red: "#ff3232",
  },
  dark: {
    mainColor: "white",
    backgroundColor: "#242424",
    orange: "orangered",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [_products, setProducts] = useState(products);

  const createProduct = (newProduct) => {
    setProducts([..._products, newProduct]);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = _products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  const toggleCurrentTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar
        currentTheme={currentTheme}
        toggleCurrentTheme={toggleCurrentTheme}
      />

      <Switch>
        <Route path="/products/:productId">
          <ProductDetail products={_products} deleteProduct={deleteProduct} />
        </Route>
        <Route path="/products">
          <ProductList
            createProduct={createProduct}
            products={_products}
            deleteProduct={deleteProduct}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
