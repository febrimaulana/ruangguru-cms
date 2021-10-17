// import { APIBASIC, reducer } from "../../../constants";

// export const loginEmailPassword = (data) => async (dispatch) => {
//   try {
//     dispatch({ type: reducer.LOADING, value: true });
//     const result = await APIBASIC.post(
//       "/api/auth/v1/auth/customer/login",
//       data
//     );
//     dispatch({ type: reducer.LOADING, value: false });
//     return result.data.data;
//   } catch (e) {
//     dispatch({ type: reducer.LOADING, value: false });
//     const error = e.response.data;
//     throw error;
//   }
// };
