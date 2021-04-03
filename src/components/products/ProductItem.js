import React, { useContext } from "react";
import PropTypes from "prop-types";
import ProductContext from "../../context/product/productContext";

const ProductItem = ({ product }) => {
  const productContext = useContext(ProductContext);
  const { addQuantityByID, subtractQuantityByID } = productContext;

  const { _id, name, quantity } = product;

  const minusQuantity = () => {
    subtractQuantityByID(_id);
  };

  const plusQuantity = () => {
    addQuantityByID(_id);
  };

  return (
    <div className='row'>
      <div className='card'>
        <div className='card-content text-primary'>
          <div className='row'>
            <div className='col s6'>
              <h5>{name}</h5>
            </div>
            <div className='col s3'> </div>
            <div>
            {product.quantity > 0 && (
              <div className='waves-effect btn red' onClick={minusQuantity}>
                -
              </div>
            )}
            <div className='waves-effect btn green' onClick={plusQuantity}>
              +
            </div>
            Quantity: {quantity}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
