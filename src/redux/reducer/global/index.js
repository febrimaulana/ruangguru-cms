import { reducer } from "../../../constants";

const initialStateRoot = {
  loading: false,
  refresh: "febri",
};

const global = (state = initialStateRoot, action) => {
  switch (action.type) {
    case reducer.LOADING:
      return {
        ...state,
        loading: action.value,
      };
    case reducer.REFRESH:
      return {
        ...state,
        refresh: action.value,
      };
    default:
      return state;
  }
};

export default global;
