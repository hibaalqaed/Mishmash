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

const ProductModal = ({ isOpen, closeModal, oldProduct }) => {
  const [product, setProduct] = useState(
    oldProduct ?? {
      name: "",
      price: 0,
      description: "",
    }
  );

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (oldProduct) productStore.updateProduct(product);
    // else productStore.createProduct(product);
    productStore[oldProduct ? "updateProduct" : "createProduct"](product);
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
              min="1"
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
              value={product.image}
              name="image"
              onChange={handleChange}
              type="text"
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
