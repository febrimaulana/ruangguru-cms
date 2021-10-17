import { reducer } from "../../../constants";

const initialStateRoot = {
  profile: {},
  token: null,
};

const profile = (state = initialStateRoot, action) => {
  switch (action.type) {
    case reducer.PROFILE:
      return {
        ...state,
        profile: action.value,
      };
    case reducer.TOKEN:
      return {
        ...state,
        token: action.value,
      };
    default:
      return state;
  }
};

export default profile;
