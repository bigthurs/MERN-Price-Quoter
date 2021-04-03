import React, { useReducer } from "react";
import CenterContext from "./centerContext";
import centerReducer from "./centerReducer";
import axios from "axios";
import {
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CENTERS,
  CLEAR_FILTER,
  GET_CENTERS,
} from "../types";

const CenterState = (props) => {
  const initialState = {
    centers: [],
    current: null,
    filtered: [],
  };

  const [state, dispatch] = useReducer(centerReducer, initialState);

  // Get centers
  const getCenters = async () => {
    try {
      const res = await axios.get("/api/centers");

      dispatch({
        type: GET_CENTERS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_CENTERS,
        payload: err.response.msg,
      });
    }
  };

  // Filter centers
  const filterCenters = (text) => {
    dispatch({ type: FILTER_CENTERS, payload: text });
  };

  // CLear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  // Set current
  const setCurrent = (center) => {
    dispatch({ type: SET_CURRENT, payload: center });
  };

  // Clear current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  return (
    <CenterContext.Provider
      value={{
        centers: state.centers,
        current: state.current,
        filtered: state.filtered,
        filterCenters,
        clearFilter,
        setCurrent,
        clearCurrent,
        getCenters,
      }}
    >
      {props.children}
    </CenterContext.Provider>
  );
};

export default CenterState;
