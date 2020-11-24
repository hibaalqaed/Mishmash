import React from "react";
import productStore from "../../stores/productStore";
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ productId }) => {
  return (
    <DeleteButtonStyled onClick={() => productStore.deleteProduct(productId)}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
