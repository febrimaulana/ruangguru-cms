import { reducer } from "../../../constants";

const initialStateRoot = {
  profile: {},
  isLogin: false,
};

const profile = (state = initialStateRoot, action) => {
  switch (action.type) {
    case reducer.PROFILE:
      return {
        ...state,
        profile: action.value,
      };
    case reducer.ISLOGIN:
      return {
        ...state,
        isLogin: action.value,
      };
    default:
      return state;
  }
};

export default profile;
