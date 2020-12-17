// React
import { Redirect } from "react-router";
import { useParams } from "react-router-dom";
// Styling
import { DetailWrapper } from "../styles";
// Buttons
import AddButton from "./buttons/AddButton";
// Components
import ProductList from "./ProductList";
// Mobx
import { observer } from "mobx-react";
// Store
import categoryStore from "../stores/categoryStore";
import productStore from "../stores/productStore";
import authStore from "../stores/authStore";

const CategoryDetail = () => {
  const { categorySlug } = useParams(); // const productId = useParams().productId;
  const category = categoryStore.categories.find(
    (_category) => _category.slug === categorySlug
  );

  if (!category) return <Redirect to="/categories" />;

  const products = category.products.map((product) =>
    productStore.getProductById(product.id)
  );

  return (
    <>
      <DetailWrapper>
        <h4>{category.name}</h4>
        <img src={category.image} alt={category.name} />
      </DetailWrapper>
      <div>
        <ProductList products={products} />
        {authStore.user && <AddButton category={category} />}
      </div>
    </>
  );
};

export default observer(CategoryDetail);
