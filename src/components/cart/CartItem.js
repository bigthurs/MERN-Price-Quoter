import React, { useContext } from "react";
import PropTypes from "prop-types";
import ProductContext from "../../context/product/productContext";
import { remove } from "cart-localstorage";

const CartItem = ({ product }) => {
  const productContext = useContext(ProductContext);

  const { removeFromCart } = productContext;

  const { name, quantity } = product;

  const removeItemFromCart = (product) => {
    remove(product._id);
    removeFromCart(product._id);
  };

  return (
    <div className='card-panel'>
      <h6 className='text-primary'>
        {name}
        <p>
          Quantity: {quantity}{" "}
          <a
            className='waves-effect btn-small red text-light'
            onClick={() => removeItemFromCart(product)}
          >
            Remove
          </a>
        </p>
      </h6>
    </div>
  );
};

CartItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CartItem;
