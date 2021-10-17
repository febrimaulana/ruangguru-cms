import { APIBASIC, reducer } from "../../../constants";

export const findAllPrize = () => async (dispatch) => {
  try {
    dispatch({ type: reducer.LOADING, value: true });
    const result = await APIBASIC.get("/ruangguru/v1/cms/prize");
    dispatch({ type: reducer.LOADING, value: false });
    return result.data.data;
  } catch (e) {
    dispatch({ type: reducer.LOADING, value: false });
    const error = e.response.data;
    throw error;
  }
};

export const actionPrize = (data) => async (dispatch) => {
  try {
    dispatch({ type: reducer.LOADING, value: true });
    const result = await APIBASIC.post("/ruangguru/v1/cms/prize", data);
    dispatch({ type: reducer.LOADING, value: false });
    return result.data;
  } catch (e) {
    dispatch({ type: reducer.LOADING, value: false });
    const error = e.response.data;
    throw error;
  }
};
