// React
import React from "react";
import { Link } from "react-router-dom";
// Styles
import { CategoryItemImage } from "../styles";

const CategoryItem = ({ category }) => {
  console.log(
    "🚀 ~ file: CategoryItem.js ~ line 9 ~ CategoryItem ~ category.image",
    category.image
  );
  return (
    <Link to={`/categories/${category.slug}`}>
      <CategoryItemImage src={category.image} alt={category.name} />
    </Link>
  );
};

export default CategoryItem;
