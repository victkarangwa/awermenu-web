/* eslint-disable import/no-anonymous-default-export */
import {
  LOADING,
  LOADING_MODAL,
  SUBSCRIBE,
  SUBSCRIBE_WITH_MODAL,
} from "../actionTypes";

export const initialState = {
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // Common states
    case LOADING:
      return { ...state, ...payload };
    case LOADING_MODAL:
      return { ...state, ...payload };
    case SUBSCRIBE:
      return {
        ...state,
        userSubscription: { ...payload.userSubscription, ...payload },
      };
    case SUBSCRIBE_WITH_MODAL:
      return {
        ...state,
        modalSubscription: { ...payload.modalSubscription, ...payload },
      };
    default:
      return state;
  }
};
