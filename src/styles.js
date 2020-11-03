import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.backgroundColor};
  }
  `;

const Title = styled.h1`
  text-align: center;
  color: purple;
`;

const Slogan = styled.h4`
  text-align: center;
`;

const RestaurantImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 25%;
`;

const ListWrapper = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
`;

const ProductWrapper = styled.div`
    margin: 20px;

    img{
     width: 200px;
     object-fit: cover;
     margin-left: auto;
     margin-right: auto;
     display: block;
    }

    p{
     text-align: center;

     &.product-price {
       color: ${props => props.theme.orange};
     }
    }
`;

  export {
      GlobalStyle,
      Title,
      Slogan,
      RestaurantImage,
      ListWrapper,
      ProductWrapper,
  };