import React from "react";
import PropTypes from "prop-types";

const QuoteProductItem = ({ product }) => {
  return (
    <tr>
        <td>{product.name}</td>
        <td>{product.quantity}</td>
        <td>${product.price}</td>
    </tr>
  );
};

QuoteProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default QuoteProductItem;
