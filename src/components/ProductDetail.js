import React from 'react'
import { DetailWrapper, GoBackButton } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ProductDetail = (props) => {
    const product = props.product;
    const handleDelete = (productId) => {
        props.deleteProduct(productId);
        props.setProduct();
    }

    return (
    <>  
        <GoBackButton onClick={() => props.setProduct()}>Go Back</GoBackButton>
        <DetailWrapper>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name}/>
            <p>{product.description}</p>
            <p>{product.price}</p>
        <DeleteButton productId={product.id} deleteProduct={handleDelete}/>
        </DetailWrapper>

    </>
    )
}

export default ProductDetail
