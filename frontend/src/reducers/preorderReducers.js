import {
  PREORDER_CREATE_FAIL,
  PREORDER_CREATE_REQUEST,
  PREORDER_CREATE_SUCCESS,
} from "../constants/preorderConstants";

export const preorderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PREORDER_CREATE_REQUEST:
      return { loading: true };
    case PREORDER_CREATE_SUCCESS:
      return { loading: false, success: true, preorder: action.payload };
    case PREORDER_CREATE_FAIL:
      return { loading: false, error: action.payload };
  }
};
