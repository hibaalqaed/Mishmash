import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
import products from "../products";

class ProductStore {
  products = products;

  constructor() {
    makeObservable(this, {
      products: observable,
      createProduct: action,
      updateProduct: action,
      deleteProduct: action,
    });
  }

  createProduct = (newProduct) => {
    newProduct.id = this.products[this.products.length - 1].id + 1;
    newProduct.slug = slugify(newProduct.name);
    this.products.push(newProduct);
  };

  updateProduct = (updatedProduct) => {
    const product = this.products.find(
      (product) => product.id === updatedProduct.id
    );
    for (const key in product) product[key] = updatedProduct[key];
    // product.name = updatedProduct.name;
    // product.price = updatedProduct.price;
    // product.descriptipn = updatedProduct.descriptipn;
    // product.image = updatedProduct.image;
    product.slug = slugify(product.name);
  };

  deleteProduct = (productSlug) => {
    this.products = this.products.filter(
      (product) => product.slug !== productSlug
    );
  };
}

const productStore = new ProductStore();
export default productStore;
