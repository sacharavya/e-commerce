import axios from 'axios'
import {
  PREORDER_CREATE_FAIL,
  PREORDER_CREATE_REQUEST,
  PREORDER_CREATE_SUCCESS,
} from '../constants/preorderConstants'

export const createPreOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PREORDER_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/preorders`, order, config)

    dispatch({
      type: PREORDER_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PREORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
