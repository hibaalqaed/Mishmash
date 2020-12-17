import { makeAutoObservable } from "mobx";
import slugify from "react-slugify";
import instance from "./instance";

class ProductStore {
  products = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  getProductById = (productId) =>
    this.products.find((product) => product.id === productId);

  fetchProducts = async () => {
    try {
      const res = await instance.get("/products");
      this.loading = false;
      this.products = res.data;
    } catch (error) {
      console.error("ProductsStore -> fetchProducts -> error", error);
    }
  };

  createProduct = async (newProduct, category) => {
    try {
      const formData = new FormData();
      //.append to access any field cuz FormData is not a regular object
      for (const key in newProduct) formData.append(key, newProduct[key]);

      const res = await instance.post(
        `/categories/${category.id}/products`,
        formData
      );
      this.products.push(res.data);
      category.products.push({ id: res.data.id });
    } catch (error) {
      console.error("ProductStore -> createProduct -> error", error);
    }
  };

  updateProduct = async (updatedProduct) => {
    try {
      const formData = new FormData();
      for (const key in updatedProduct)
        formData.append(key, updatedProduct[key]);

      await instance.put(`/products/${updatedProduct.id}`, formData);
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
      await instance.delete(`/products/${productId}`);
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
