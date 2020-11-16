import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
import products from "../products";

class ProductStore {
  products = products;

  constructor() {
    makeObservable(this, {
      products: observable,
      createProduct: action,
      deleteProduct: action,
    });
  }

  createProduct = (newProduct) => {
    newProduct.id = this.products[this.products.length - 1].id + 1;
    newProduct.slug = slugify(newProduct.name);
    this.products.push(newProduct);
  };

  deleteProduct = (productSlug) => {
    this.products = this.products.filter(
      (product) => product.slug !== productSlug
    );
  };
}

const productStore = new ProductStore();
export default productStore;
