//React
import { useState } from "react";
// Mobx
import { observer } from "mobx-react";
// Styles
import { Title } from "../styles";
// Store
import branchStore from "../stores/branchStore";

const BranchList = () => {
  const [query, setQuery] = useState("");

  const branchlist = branchStore.branches
    .filter((branch) => branch.name.toLowerCase().includes(query.toLowerCase()))
    .map((branch) => <BranchItem branch={branch} key={branch.id} />);

  return (
    <div className="container">
      <Title>Bakeries</Title>
    </div>
  );
};

export default observer(BranchList);
