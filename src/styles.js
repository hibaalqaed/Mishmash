import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  body{
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
  `;

export const UpdateButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
  cursor: pointer;
`;

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const Logo = styled(Link)`
  padding: 0.75em;
  img {
    width: 8rem;
  }
`;

export const NavProduct = styled(NavLink)`
  padding: 0.25em 1em;
  color: ${(theme) => theme.mainColor};
  &.active {
    background-color: orange;
  }
`;

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
  cursor: pointer;
`;

export const GoBackButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h2`
  text-align: center;
  color: purple;
`;

export const Slogan = styled.h4`
  text-align: center;
  color: orangered;
`;

export const RestaurantImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  height: 500px;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const ProductWrapper = styled.div`
  margin: 20px;

  img {
    /* width: 200px; */
    height: 200px;
    object-fit: cover;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  p {
    text-align: center;
  }

  .product-price {
    color: ${(props) => props.theme.orange};
  }
`;

export const BranchItemImage = styled.img`
  width: 20em;
`;

export const AuthButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.pink};
  color: ${(props) => props.theme.backgroundColor};
`;
