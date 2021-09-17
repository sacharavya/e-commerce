import axios from 'axios'
import {
  PREORDER_ADD_ITEM,
  PREORDER_CREATE_FAIL,
  PREORDER_CREATE_REQUEST,
  PREORDER_CREATE_SUCCESS,
  PREORDER_REMOVE_ITEM,
} from '../constants/preorderConstants'

export const addToPreorder = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)
  dispatch({
    type: PREORDER_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
    },
  })
  localStorage.setItem(
    'preorderItems',
    JSON.stringify(getState().preorder.preorderItems)
  )
}

export const removeFromPreorder = (id) => (dispatch, getState) => {
  dispatch({
    type: PREORDER_REMOVE_ITEM,
    payload: id,
  })
  localStorage.setItem(
    'preorderItems',
    JSON.stringify(getState().preorder.preorderItems)
  )
}

export const createPreorder = (preorder) => async (dispatch, getState) => {
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

    console.log(preorder)
    const { data } = await axios.post(`/api/preorders`, preorder, config)

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
