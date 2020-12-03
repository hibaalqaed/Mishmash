import logo from "../images/mishmash-logo.jpg";

import { Logo, NavProduct, ThemeButton } from "../styles";

const NavBar = ({ toggleCurrentTheme, currentTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Logo to="/" className="navbar-brand">
        <img src={logo} alt="" width="150" />
      </Logo>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavProduct to="/branches" style={{ float: "right" }}>
              Branches
            </NavProduct>
            <NavProduct to="/products" style={{ float: "right" }}>
              Products
            </NavProduct>
          </li>
          <li className="nav-item">
            <ThemeButton onClick={toggleCurrentTheme}>
              {currentTheme === "light" ? "Dark" : "Light"} Mode
            </ThemeButton>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
