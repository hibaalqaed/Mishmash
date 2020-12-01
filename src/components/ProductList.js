//React
import { useState } from "react";
import { observer } from "mobx-react";

//Stores
import productStore from "../stores/productStore";

//Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";

//Styles
import { ListWrapper } from "../styles";

const ProductList = () => {
  const [query, setQuery] = useState("");

  const filteredProducts = productStore.products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  const productArray = filteredProducts.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <AddButton />
      <ListWrapper>{productArray}</ListWrapper>
    </>
  );
};

export default observer(ProductList);
