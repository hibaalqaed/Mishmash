import { makeAutoObservable } from "mobx";
import axios from "axios";

class BranchStore {
  branches = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchBranches = async () => {
    try {
      const res = await axios.get("http://localhost:8000/branches");
      this.branches = res.data;
      this.loading = false;
    } catch (error) {
      console.error("BranchesStore -> fetchBranches -> error", error);
    }
  };

  createBranch = async (newBranch) => {
    try {
      const formData = new FormData();
      //.append to access any field cuz FormData is not a regular object
      for (const key in newBranch) formData.append(key, newBranch[key]);

      const res = await axios.post("http://localhost:8000/branches", formData);
      this.branches.push(res.data);
    } catch (error) {
      console.error("BranchStore -> createBranch -> error", error);
    }
  };
}

const branchStore = new BranchStore();
branchStore.fetchBranches();

export default branchStore;
