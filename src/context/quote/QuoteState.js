import React, { useReducer } from "react";
import axios from "axios";
import QuoteContext from "./quoteContext";
import quoteReducer from "./quoteReducer";
import {
  CLEAR_QUOTE,
  RECEIVE_QUOTE,
  QUOTE_ERROR
} from "../types";

const QuoteState = (props) => {
  const initialState = {
    quote_id: null,
    name: null,
    email: null,
    DOB: null,
    center_id: null,
    center_name: null,
    products: [],
    submitted: false,
    total: 0
  };

  const [state, dispatch] = useReducer(quoteReducer, initialState);

  // Send products in quote to back-end for price lookup.
  const submitForQuote = async (quoteRequest) => {
    try {
        const { name, email, DOB, products, center_id, center_name } = quoteRequest;
        const data = {
          name: name,
          email: email,
          DOB: DOB,
          products: products,
          center_id: center_id,
          center_name: center_name
        };
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
    
        const res = await axios.post("/api/quotes", data, config);
    
        dispatch({
          type: RECEIVE_QUOTE,
          payload: res.data
        })
      } catch (err) {
        dispatch({
          type: QUOTE_ERROR,
          payload: err.response.msg,
        });
      }
  };

  const clearQuote = () => {
    dispatch({ type: CLEAR_QUOTE });
  }

  return (
    <QuoteContext.Provider
      value={{
        quote_id: state.quote_id,
        products: state.products,
        submitted: state.submitted,
        name: state.name,
        email: state.email,
        DOB: state.DOB,
        center_id: state.center_id,
        center_name: state.center_name,
        total: state.total,
        submitForQuote,
        clearQuote
      }}
    >
      {props.children}
    </QuoteContext.Provider>
  );
};

export default QuoteState;
