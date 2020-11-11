import React from "react";
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = ({ productId, deleteProduct }) => {
  const handleDelete = () => deleteProduct(productId);

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
