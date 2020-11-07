import React from 'react'
import { DeleteButtonStyled } from "../../styles"

const DeleteButton = (props) => {
    const productId = props.productId;
    const handleDelete = () => {
        props.deleteProduct(productId);
        }

    return (
        <DeleteButtonStyled onClick={handleDelete}>
            Delete
        </DeleteButtonStyled>
    )
}

export default DeleteButton
