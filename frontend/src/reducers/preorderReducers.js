import {
  PREORDER_CREATE_FAIL,
  PREORDER_CREATE_REQUEST,
  PREORDER_CREATE_SUCCESS,
  PREORDER_ADD_ITEM,
  PREORDER_REMOVE_ITEM,
  PREORDER_RESET,
} from '../constants/preorderConstants'

export const preorderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PREORDER_CREATE_REQUEST:
      return { loading: true }
    case PREORDER_CREATE_SUCCESS:
      return { loading: false, success: true, preorder: action.payload }
    case PREORDER_CREATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const preorderReducer = (state = { preorderItems: [] }, action) => {
  switch (action.type) {
    case PREORDER_ADD_ITEM:
      const item = action.payload

      const existItem = state.preorderItems.find(
        (x) => x.product === item.product
      )
      if (existItem) {
        return {
          ...state,
          preorderItems: state.preorderItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }
      } else {
        return {
          ...state,
          preorderItems: [...state.preorderItems, item],
        }
      }
    case PREORDER_REMOVE_ITEM:
      return {
        ...state,
        preorderItems: state.preorderItems.filter(
          (x) => x.product !== action.payload
        ),
      }
    case PREORDER_RESET:
      return {
        preorderItems: [],
      }
    default:
      return state
  }
}
