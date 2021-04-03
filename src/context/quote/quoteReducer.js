import {
    CLEAR_QUOTE,
    RECEIVE_QUOTE,
  } from "../types";
  
  export default (state, action) => {
    switch (action.type) {
      case CLEAR_QUOTE:
        return {
          ...state,
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
      case RECEIVE_QUOTE:
        return {
          ...state,
          quote_id: action.payload._id,
          products: action.payload.products,
          center_id: action.payload.center_id,
          center_name: action.payload.center_name,
          DOB: action.payload.DOB,
          name: action.payload.name,
          email: action.payload.email,
          total: action.payload.total,
          submitted: true
        };
      default:
        return {
          ...state,
        };
    }
  };
  