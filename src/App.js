// React
import { useState } from "react";
import { observer } from "mobx-react";

// Styling
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";

// Components
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";
import productStore from "./stores/productStore";
import branchStore from "./stores/branchStore";

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
      {productStore.loading || branchStore.loading ? (
        <h1>Loading...</h1>
      ) : (
        <Routes />
      )}
    </ThemeProvider>
  );
}

export default observer(App);
