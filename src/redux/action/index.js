import { notification } from "antd";
import {
  SUBSCRIBE,
  LOADING,
  SUBSCRIBE_WITH_MODAL,
  LOADING_MODAL,
} from "redux/actionTypes";
import mailService from "services/core";

export const subscribe = (payload) => async (dispatch) => {
  dispatch({ type: LOADING, payload: { loading: true } });
  try {
    const { status, response } = await mailService.subscribe(payload);

    if (status === 201) {
      dispatch({
        type: SUBSCRIBE,
        payload: {
          message: "Your email has been submitted. Thank you!",
          status: "success",
        },
      });
      notification.success({
        message: "Your email has been submitted. Thank you!",
      });
    } else {
      const error = response?.data?.error;
      dispatch({
        type: SUBSCRIBE,
        payload: {
          message: typeof error == "object" ? error[0] : error,
          status: "fail",
        },
      });
    }
    dispatch({ type: LOADING, payload: { loading: false } });
  } catch (error) {
    dispatch({ type: LOADING, payload: { loading: false } });
  }
};

export const subscribeWithModal = (payload) => async (dispatch) => {
  dispatch({ type: LOADING_MODAL, payload: { loadingModal: true } });
  try {
    const { status, response } = await mailService.subscribe(payload);

    if (status === 201) {
      dispatch({
        type: SUBSCRIBE_WITH_MODAL,
        payload: {
          message: "Your email has been submitted. Thank you!",
          status: "success",
        },
      });
      notification.success({
        message: "Your email has been submitted. Thank you!",
      });
    } else {
      const error = response?.data?.error;
      dispatch({
        type: SUBSCRIBE_WITH_MODAL,
        payload: {
          message: typeof error == "object" ? error[0] : error,
          status: "fail",
        },
      });
    }
    dispatch({ type: LOADING_MODAL, payload: { loadingModal: false } });
  } catch (error) {
    dispatch({ type: LOADING_MODAL, payload: { loadingModal: false } });
  }
};
