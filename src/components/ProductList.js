//React
import { useState } from "react";

//Styles
import { ListWrapper } from "../styles";

//Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";

const ProductList = ({
  products,
  setProduct,
  deleteProduct,
  createProduct,
}) => {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  const productArray = filteredProducts.map((product) => (
    <ProductItem
      product={product}
      setProduct={setProduct}
      deleteProduct={deleteProduct}
      key={product.id}
    />
  ));

  return (
    //fragment
    <>
      <SearchBar setQuery={setQuery} />
      <AddButton createProduct={createProduct} />
      <ListWrapper>{productArray}</ListWrapper>
    </>
  );
};

export default ProductList;
