// React
import { Route, Switch } from "react-router";
import { observer } from "mobx-react";

// Components
import Home from "./Home";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import BranchDetail from "./BranchDetail";
import BranchList from "./BranchList";
import productStore from "../stores/productStore";

const Routes = () => {
  return (
    <Switch>
      <Route path="/branches/:branchSlug">
        <BranchDetail />
      </Route>
      <Route path="/products/:productId">
        <ProductDetail />
      </Route>
      <Route path="/branches">
        <BranchList />
      </Route>
      <Route path="/products">
        <ProductList products={productStore.products} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
