import React, { useReducer } from "react";
import axios from "axios";
import ProductContext from "./productContext";
import productReducer from "./productReducer";
import {
  FILTER_PRODUCTS,
  CLEAR_FILTER,
  SET_QUANTITY,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY,
  REMOVE_FROM_CART,
  GET_PRODUCTS,
  CLEAR_PRODUCTS,
  PRODUCT_ERROR
} from "../types";

const ProductState = (props) => {
  const initialState = {
    products: [],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  // Get Products
  const getProducts = async () => {
    try {
      const res = await axios.get("/api/products");

      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Filter products
  const filterProducts = (text) => {
    dispatch({ type: FILTER_PRODUCTS, payload: text });
  };

  // CLear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  // Set Quantity by ID
  const setQuantityByID = (quantity, _id) => {
    dispatch({ type: SET_QUANTITY, payload: quantity, _id });
  };

  // Add Quantity by ID
  const addQuantityByID = (_id) => {
    dispatch({ type: ADD_QUANTITY, payload: _id });
  };

  // Subtract Quantity by ID
  const subtractQuantityByID = (_id) => {
    dispatch({ type: SUBTRACT_QUANTITY, payload: _id });
  };

  // Reset product quantity to 0
  const removeFromCart = (_id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: _id });
  };

  const clearProducts = () => {
    dispatch({type: CLEAR_PRODUCTS })
  }

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        filtered: state.filtered,
        setQuantityByID,
        addQuantityByID,
        subtractQuantityByID,
        filterProducts,
        clearFilter,
        removeFromCart,
        getProducts,
        clearProducts
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
