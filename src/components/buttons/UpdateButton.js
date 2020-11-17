//React
import { useState } from "react";

//Components
import ProductModal from "../modals/ProductModal";

import { UpdateButtonStyled } from "../../styles";

const UpdateButton = ({ oldProduct }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <ProductModal
        oldProduct={oldProduct}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default UpdateButton;
