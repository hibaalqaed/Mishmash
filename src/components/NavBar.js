import logo from "../images/mishmash-logo.jpg";
import { Logo, NavProduct, ThemeButton, UsernameStyled } from "../styles";
import SignupButton from "./buttons/SignupButton";
import SigninButton from "./buttons/SigninButton";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import { RiLogoutCircleRLine } from "react-icons/ri";

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
            {authStore.user ? (
              <>
                <UsernameStyled>
                  Hello, {authStore.user.username}
                </UsernameStyled>
                <RiLogoutCircleRLine
                  onClick={authStore.signout}
                  size="2em"
                  color="red"
                />
              </>
            ) : (
              <>
                <SigninButton />
                <SignupButton />
              </>
            )}
            <ThemeButton onClick={toggleCurrentTheme}>
              {currentTheme === "light" ? "Dark" : "Light"} Mode
            </ThemeButton>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default observer(NavBar);
