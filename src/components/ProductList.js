import products from '../products'
import { useState } from "react";

//Styles
import { ListWrapper } from '../styles'

//Components
import ProductItem from './ProductItem'
import SearchBar from './SearchBar'

//has to be in capital letter cuz component
const ProductList = () => {
    const [query, setQuery] = useState("");

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    const productArray = filteredProducts.map(product => (
        <ProductItem productObject={product} key={product.id} />
      ))

    return (
    //fragment
    <>
        <SearchBar setQuery={setQuery} />
        <ListWrapper>   
            {productArray}
        </ListWrapper>
    </>
    )   
    }

export default ProductList;