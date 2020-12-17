// Styling
import { GlobalStyle } from "./styles";
// Components
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";
import { ThemeProvider } from "styled-components";
import categoryStore from "./stores/categoryStore";
import { observer } from "mobx-react";
import productStore from "./stores/productStore";
// React
import { useState } from "react";

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
  const toggleCurrentTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar
        currentTheme={currentTheme}
        toggleCurrentTheme={toggleCurrentTheme}
      />
      {productStore.loading || categoryStore.loading ? (
        <h1>Loading...</h1>
      ) : (
        <Routes />
      )}
    </ThemeProvider>
  );
}

export default observer(App);
