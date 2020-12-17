// Styling
import { ListWrapper, Title } from "../styles";

// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { observer } from "mobx-react";
// React
import { useState } from "react";

const ProductList = ({ products }) => {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  const productArray = filteredProducts.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <Title>Products</Title>
      <ListWrapper>{productArray}</ListWrapper>
    </>
  );
};

export default observer(ProductList);
