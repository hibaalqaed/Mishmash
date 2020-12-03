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
import branchStore from "../stores/branchStore";
import productStore from "../stores/productStore";

const BranchDetail = () => {
  const { branchSlug } = useParams(); // const productId = useParams().productId;
  const branch = branchStore.branches.find(
    (_branch) => _branch.Slug === branchSlug
  );

  if (!branch) return <Redirect to="/branches" />;

  const products = branch.products.map((product) =>
    productStore.getProductById(product.id)
  );

  return (
    <>
      <DetailWrapper>
        <h4>{branch.name}</h4>
        <img src={branch.image} alt={branch.name} />
      </DetailWrapper>
      <ProductList products={products} />
      <AddButton branch={branch} />
    </>
  );
};

export default observer(BranchDetail);
