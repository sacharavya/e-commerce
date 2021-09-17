import asyncHandler from 'express-async-handler'
import Preorder from '../models/preorderModel.js'

// @desc Create new preorder
// @route /api/preorders
// @access Private
const addPreOrderItems = asyncHandler(async (req, res) => {
  const { preorderItems, preorderItemsPrice } = req.body
  if (preorderItems && preorderItems.length === 0) {
    res.status(400)
    throw new Error('No preorder items')
    return
  } else {
    const preorder = new Preorder({
      preorderItems,
      preorderItemsPrice,
      user: req.user.id,
    })

    const createdPreOrder = await preorder.save()

    res.status(201).json(createdPreOrder)
  }
})

// @desc    Get preorder by ID
// @route   GET /api/preorders/:id
// @access  Private
const getPreOrderById = asyncHandler(async (req, res) => {
  const preorder = await Preorder.findById(req.params.id).populate(
    'user',
    'name email'
  )

  if (
    preorder &&
    (req.user.isAdmin || preorder.user._id.equals(req.user._id))
  ) {
    resjson(preorder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc get all preorder
// @route /api/preorder
// @access private, admin
const getAllPreOrderItems = asyncHandler(async (req, res) => {
  const preorders = await Preorder.find({}).populate('user', 'id name email')

  console.log(preorders)
  console.log(user)
  res.json(preorders)
})

// @desc    Get logged in user preorders
// @route   GET /api/orders/mypreorders
// @access  Private
const getMyPreOrders = asyncHandler(async (req, res) => {
  const preorders = await Preorder.find({ user: req.user._id })

  res.json(preorders)
})

export {
  addPreOrderItems,
  getPreOrderById,
  getAllPreOrderItems,
  getMyPreOrders,
}
