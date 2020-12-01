// React
import React from "react";
// Styles
import { BranchItemImage } from "../styles";

const BranchItem = ({ branch }) => {
  return <BranchItemImage src={branch.image} alt={branch.name} />;
};

export default BranchItem;
