//Styles
import { DetailWrapper } from "../styles";

const BranchDetail = () => {
  const { branchSlug } = useParams(); // const productId = useParams().productId;
  const branch = branchStore.branches.find(
    (_branch) => _branch.Slug === branchSlug
  );

  return (
    <DetailWrapper>
      <h4>{branch.name}</h4>
      <img src={branch.image} />
    </DetailWrapper>
  );
};

export default BranchDetail;
