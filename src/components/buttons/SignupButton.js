import { useState, React } from "react";
import { AuthButtonStyled } from "./styles";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <AuthButtonStyled onClick={openModal}>Sign Up</AuthButtonStyled>
      <Signup isOpen={isOpen} closeModal={closeModal} />;
    </>
  );
};

export default SignupButton;
