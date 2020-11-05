import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.backgroundColor};
  }
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
  `;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  border-radius: 3px;
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.backgroundColor};
`;

export const Title = styled.h1`
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
  width: 25%;
`;

export const ListWrapper = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
`;

export const ProductWrapper = styled.div`
    margin: 20px;

    img{
     /* width: 200px; */
     height: 200px;
     object-fit: cover;
     margin-left: auto;
     margin-right: auto;
     display: block;
    }

    p{
     text-align: center;
     }

     .product-price {
       color: ${props => props.theme.orange};
    }
`;
