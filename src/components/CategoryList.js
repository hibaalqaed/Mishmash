// React
import { useState } from "react";
// Mobx
import { observer } from "mobx-react";
// Styles
import { Title } from "../styles";
// Store
import categoryStore from "../stores/categoryStore";
// Components
import CategoryItem from "./CategoryItem";
import SearchBar from "./SearchBar";

const CategoryList = () => {
  const [query, setQuery] = useState("");

  const categorylist = categoryStore.categories
    .filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <CategoryItem category={category} key={category.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <Title>Categories</Title>
      {categorylist}
    </div>
  );
};

export default observer(CategoryList);
