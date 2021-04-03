import React, { useContext } from "react";
import CenterContext from "../../context/center/centerContext";
import M from "materialize-css/dist/js/materialize.min.js";

const CartBtn = () => {
  const centerContext = useContext(CenterContext);
  const current = centerContext ? centerContext.current : null;

  const onClick = () => {
    if (current === null) {
      M.toast({
        html: "Please select a center to begin putting your cart together.",
      });
      return;
    }
  };

  return (
    <div className='fixed-action-btn'>
      <a
        href='#checkout-modal'
        className='btn-floating btn-large blue darken-2 modal-trigger'
        onClick={onClick}
      >
        <i className='large material-icons'>shopping_cart</i>
      </a>
    </div>
  );
};

export default CartBtn;
