import { useState } from "react";
import Modal from "react-modal";

import { CreateButtonStyled } from "../../styles.js";

import productStore from "../../stores/productStore";

const ProductModal = ({ isOpen, closeModal }) => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    productStore.createProduct(product);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Product Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              name="name"
              onChange={handleChange}
              type="text"
              required
              className="form-control"
            />
          </div>

          <div className="col-6">
            <label>Price</label>
            <input
              name="price"
              onChange={handleChange}
              type="number"
              min="1"
              required
              className="form-control"
            />
          </div>

          <div className="col-6">
            <label>Description</label>
            <input
              name="description"
              onChange={handleChange}
              type="text"
              required
              className="form-control"
            />
          </div>

          <div className="col-6">
            <label>Image</label>
            <input
              name="image"
              onChange={handleChange}
              type="text"
              required
              className="form-control"
            />
          </div>
        </div>
        <CreateButtonStyled type="submit">Create</CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default ProductModal;
