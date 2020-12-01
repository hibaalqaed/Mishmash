import { makeObservable, observable } from "mobx";
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
      const formData = new FormData();
      //.append to access any field cuz FormData is not a regular object
      for (const key in newProduct) formData.append(key, newProduct[key]);

      const res = await axios.post("http://localhost:8000/products", formData);
      this.products.push(res.data);
    } catch (error) {
      console.error("ProductStore -> createProduct -> error", error);
    }
  };

  updateProduct = async (updatedProduct) => {
    try {
      const formData = new FormData();
      for (const key in updatedProduct)
        formData.append(key, updatedProduct[key]);

      await axios.put(
        `http://localhost:8000/products/${updatedProduct.id}`,
        formData
      );
      const product = this.products.find(
        (product) => product.id === updatedProduct.id
      );
      for (const key in product) product[key] = updatedProduct[key];
      product.image = URL.createObjectURL(updatedProduct.image);

      product.slug = slugify(product.name);
    } catch (error) {
      console.error("ProductStore -> updateProduct -> error", error);
    }
  };

  deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
      this.products = this.products.filter(
        (product) => product.id !== +productId
      );
    } catch (error) {
      console.log("ProductStore -> deleteProduct -> error", error);
    }
  };
}

const productStore = new ProductStore();
productStore.fetchProducts();

export default productStore;
