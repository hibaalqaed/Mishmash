//React
import { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

//Components
import ProductModal from "../modals/ProductModal";

const AddButton = ({ createProduct }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <BsFillPlusCircleFill
        className="float-right"
        size="2em"
        onClick={openModal}
      />
      <ProductModal
        createProduct={createProduct}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default AddButton;
