// React
import React from "react";
import { Link } from "react-router-dom";
// Styles
import { BranchItemImage } from "../styles";

const BranchItem = ({ branch }) => {
  console.log(
    "🚀 ~ file: BranchItem.js ~ line 9 ~ BranchItem ~ branch.image",
    branch.image
  );
  return (
    <Link to={`/branches/${branch.slug}`}>
      <BranchItemImage src={branch.image} alt={branch.name} />
    </Link>
  );
};

export default BranchItem;
