import React from "react";
import productStore from "../../stores/productStore";
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ productSlug }) => {
  return (
    <DeleteButtonStyled onClick={() => productStore.deleteProduct(productSlug)}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
