import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'

// @desc Fetch All Products
// @route GET /api/products
// @access Public
const getCategory = asyncHandler(async (req, res) => {
  const category = await Category.find({})

  res.json(category)
})

// @Desc Create New category
// @route CREATE /api/category
// @access private/admin
const createCategory = asyncHandler(async (req, res) => {
  const category = new Category({
    name: 'default',
  })

  const createdCategory = await category.save()
  res.status(201).json(createdCategory)
})

// @Desc update existing category
// @route UPDATE /api/category/:id
// @access private/admin
const updateCategory = asyncHandler(async (req, res) => {
  const { name } = req.body
  const category = await Category.findById(req.params.id)

  if (category) {
    category.name = name

    const updatedCategory = await category.save()
    res.status(201).json(updatedCategory)
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
})

// @Desc Delete existing Category
// @route DELETE /api/category/:id
// @access private/admin
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id)
  if (category) {
    await category.remove()
    res.json({ message: 'Category removed' })
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
})

export { getCategory, createCategory, updateCategory, deleteCategory }
