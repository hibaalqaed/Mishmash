// React
import { useState } from "react";
// Mobx
import { observer } from "mobx-react";
// Styles
import { Title } from "../styles";
// Store
import branchStore from "../stores/branchStore";
// Components
import BranchItem from "../components/BranchItem";
import SearchBar from "./SearchBar";

const BranchList = () => {
  const [query, setQuery] = useState("");

  const branchlist = branchStore.branches
    .filter((branch) => branch.name.toLowerCase().includes(query.toLowerCase()))
    .map((branch) => <BranchItem branch={branch} key={branch.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <Title>Branches</Title>
      {branchlist}
    </div>
  );
};

export default observer(BranchList);
