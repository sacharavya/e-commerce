import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

// @desc Fetch All Products
// @route GET /api/products
// @access Public
router.get('/', asyncHandler(async(req, res) => {

    const product = await Product.find({})

    res.json(product)
  }))

// @desc Fetch Single Products
// @route GET /api/products/:id
// @access Public
  router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Product not Found')
    }
  }))

export default router