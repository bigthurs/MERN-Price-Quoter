import React, { useState, useContext } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import ProductContext from "../../context/product/productContext";
import QuoteContext from "../../context/quote/quoteContext";
import CenterContext from "../../context/center/centerContext";
import CartItem from "./CartItem";

const CheckoutModal = () => {
  const productContext = useContext(ProductContext);
  const { products } = productContext;

  const quoteContext = useContext(QuoteContext);
  const { submitForQuote } = quoteContext;

  const centerContext = useContext(CenterContext);
  const current = centerContext.current || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [DOB, setDOB] = useState("");

  const onSubmit = () => {
    const productsInCart = [];
    products.forEach((product) => {
      if (product.quantity > 0) {
        productsInCart.push(product);
      }
    });

    if ((email === "") | (name === "")) {
      M.toast({ html: "Please enter patient name and email" });
    } else if (productsInCart.length === 0) {
      M.toast({ html: "Cart is empty please add products before checking out" });
    } else {
      const quoteRequest = {
        name: name,
        email: email,
        DOB: DOB,
        center_id: current._id,
        center_name: current.name,
        products: productsInCart,
      };
      submitForQuote(quoteRequest);
    }
  };

  return (
    <div id='checkout-modal' className='modal text-primary' style={modalStyle}>
      <div className='modal-content'>
        <div className='row'>
          {current === null ? (
            <h4 className='red-text'>Please select a Center to continue</h4>
          ) : (
            <h4 className='text-primary col'>Patient Center: {current.name}</h4>
          )}
        </div>
        <div className='row'>
          <div className='input-field col s6'>
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='name' className='active'>
              Enter patient name*
            </label>
          </div>
          <div className='input-field col s6'>
            <input
              type='text'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='email' className='active'>
              Enter patient email address*
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s6'>
            <input
              type='text'
              name='phone number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor='phone' className='active'>
              Enter patient phone number
            </label>
          </div>
          <div className='input-field col s6'>
            <input
              type='text'
              name='DOB'
              value={DOB}
              onChange={(e) => setDOB(e.target.value)}
            />
            <label htmlFor='dob' className='active'>
              Enter patient date of birth (MM/DD/YYYY)
            </label>
          </div>
        </div>
        <div className='text-primary'>
          <div className='row'>
            {products.map((product) =>
              product.quantity > 0 ? (
                <CartItem key={product._id} product={product} />
              ) : null
            )}
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#'
          onClick={onSubmit}
          className='modal-close waves-effect btn btn-primary'
        >
          <span className='text-light'>Submit for quote</span>
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  width: "75%",
  height: "90%",
};

export default CheckoutModal;
