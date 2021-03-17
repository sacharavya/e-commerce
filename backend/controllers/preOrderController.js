import asyncHandler from 'express-async-handler'
import Preorder from '../models/preorderModel.js'

// @desc Create new preorder
// @route /api/preorders
// @access Private
const addPreOrderItems = asyncHandler(async (req, res) => {
  const { preorderItems } = req.body
  if (preorderItems && preorderItems.length === 0) {
    res.status(400)
    throw new Error('No preorder items')
    return
  } else {
    const preorder = new Preorder({
      preorderItems,
      user: req.user._id,
    })

    const createdPreOrder = await preorder.save()

    res.status(201).json(createdPreOrder)
  }
})

export { addPreOrderItems }
