import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
import axios from "axios";
import { arrayExtensions } from "mobx/dist/internal";

class ProductStore {
  products = [];

  constructor() {
    makeObservable(this, {
      products: observable,
    });
  }

  fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/products");
      this.products = res.data;
    } catch (error) {
      console.error("ProductsStore -> fetchProducts -> error", error);
    }
  };

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

  deleteProduct = async (productSlug) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productSlug}`);
      this.products = this.products.filter(
        (product) => product.slug !== productSlug
      );
    } catch (error) {
      console.log("ProductStore -> deleteProduct -> error", error);
    }
  };
}

const productStore = new ProductStore();
productStore.fetchProducts();

export default productStore;
