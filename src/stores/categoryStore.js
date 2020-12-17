import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CategoryStore {
  categories = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCategories = async () => {
    try {
      const res = await instance.get("/categories");
      this.categories = res.data;
      this.loading = false;
    } catch (error) {
      console.error("CategoriesStore -> fetchCategories -> error", error);
    }
  };

  createCategory = async (newCategory) => {
    try {
      const formData = new FormData();
      //.append to access any field cuz FormData is not a regular object
      for (const key in newCategory) formData.append(key, newCategory[key]);

      const res = await instance.post("/categories", formData);
      this.categories.push(res.data);
    } catch (error) {
      console.error("CategoryStore -> createCategory -> error", error);
    }
  };
}

const categoryStore = new CategoryStore();
categoryStore.fetchCategories();

export default categoryStore;
