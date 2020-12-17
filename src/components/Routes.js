// React
import { Route, Switch } from "react-router";
import { observer } from "mobx-react";

// Components
import Home from "./Home";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import CategoryDetail from "./CategoryDetail";
import CategoryList from "./CategoryList";
import productStore from "../stores/productStore";

const Routes = () => {
  return (
    // switch is there so that only one route displays at a time
    <Switch>
      <Route path="/categories/:categorySlug">
        <CategoryDetail />
      </Route>
      <Route path="/products/:productId">
        <ProductDetail />
      </Route>
      <Route path="/categories">
        <CategoryList />
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
