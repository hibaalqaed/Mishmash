import { useState } from "react";
import Modal from "react-modal";

import { CreateButtonStyled } from "../../styles.js";

import productStore from "../../stores/productStore";

/** 
 * Null Coalescing Operator
 * 
 * oldProduct ? oldProduct : { 
      name: "",
      price: 0,
      description: "",
      image: "",
    }
 * ...same as...
 * 
 * oldProduct ?? { 
      name: "",
      price: 0,
      description: "",
      image: "",
    }
 */

const ProductModal = ({ isOpen, closeModal, oldProduct, branch }) => {
  const [product, setProduct] = useState(
    oldProduct ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (oldProduct) productStore.updateProduct(product);
    else productStore.createProduct(product, branch);
    // productStore[oldProduct ? "updateProduct" : "createProduct"](product);
    closeModal();
  };

  // deconstruct products > ...product
  const handleImage = (event) => {
    setProduct({ ...product, image: event.target.files[0] });
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
              value={product.name}
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
              value={product.price}
              name="price"
              onChange={handleChange}
              type="number"
              step="any"
              min="0"
              required
              className="form-control"
            />
          </div>

          <div className="col-6">
            <label>Description</label>
            <input
              value={product.description}
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
              onChange={handleImage}
              type="file"
              required
              className="form-control"
            />
          </div>
        </div>
        <CreateButtonStyled type="submit">
          {oldProduct ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default ProductModal;
