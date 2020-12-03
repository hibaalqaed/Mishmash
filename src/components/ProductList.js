// React
import { useState } from "react";
import { observer } from "mobx-react";

// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";

// Styling
import { ListWrapper } from "../styles";

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
      <ListWrapper>{productArray}</ListWrapper>
    </>
  );
};

export default observer(ProductList);
