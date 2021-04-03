import {
  SET_CURRENT,
  GET_CENTERS,
  CLEAR_CURRENT,
  FILTER_CENTERS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_CENTERS:
      return {
        ...state,
        centers: action.payload,
      };
    case FILTER_CENTERS:
      return {
        ...state,
        filtered: state.centers.filter((center) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            center.name.match(regex) ||
            center.doctors.find((doctor) => doctor.match(regex))
          );
        }),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    default:
      return {
        ...state,
      };
  }
};
