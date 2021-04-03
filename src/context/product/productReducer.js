import {
  GET_PRODUCTS,
  FILTER_PRODUCTS,
  CLEAR_FILTER,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY,
  CLEAR_PRODUCTS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filtered: state.products.filter((product) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return product.name.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case ADD_QUANTITY:
      if (state.filtered !== null) {
        return {
          ...state,
          products: state.products.map((product) => ({
            ...product,
            quantity:
              product._id === action.payload
                ? product.quantity + 1
                : product.quantity,
          })),
          filtered: state.filtered.map((product) => ({
            ...product,
            quantity:
              product._id === action.payload
                ? product.quantity + 1
                : product.quantity,
          }))
        };
      } else {
        return {
          ...state,
          products: state.products.map((product) => ({
            ...product,
            quantity:
              product._id === action.payload
                ? product.quantity + 1
                : product.quantity,
          }))
      };
    }
    case SUBTRACT_QUANTITY:
      if (state.filtered !== null) {
        return {
          ...state,
          products: state.products.map((product) => ({
            ...product,
            quantity:
              product._id === action.payload
                ? product.quantity - 1
                : product.quantity,
          })),
          filtered: state.filtered.map((product) => ({
            ...product,
            quantity:
              product._id === action.payload
                ? product.quantity - 1
                : product.quantity,
          }))
        };
      } else {
        return {
          ...state,
          products: state.products.map((product) => ({
            ...product,
            quantity:
              product._id === action.payload
                ? product.quantity - 1
                : product.quantity,
          }))
      };
    }
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.map((product) => ({
          ...product,
          quantity:
            product._id === action.payload
              ? (product.quantity = 0)
              : product.quantity,
        })),
      };
    case CLEAR_PRODUCTS:
      return {
        ...state,
        products: []
      }
    default:
      return {
        ...state,
      };
  }
};
