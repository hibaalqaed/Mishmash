import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

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

  createProduct = async (newProduct) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/products",
        newProduct
      );
      this.products.push(res.data);
    } catch (error) {
      console.error("ProductStore -> createProduct -> error", error);
    }
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
