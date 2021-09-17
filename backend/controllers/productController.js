import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import asyncHandler from 'express-async-handler'
import Preorder from '../models/preorderModel.js'
import Product from '../models/productModel.js'

// @desc Fetch All Products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 12
  const page = Number(req.query.pageNumber) || 1
  const keyword = req.query.keyword
    ? {
        name: { $regex: req.query.keyword, $options: 'i' },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })

  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
  res.json({ products, page, pages: Math.ceil(count / pageSize) })
})

// @desc Fetch Single Products
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not Found')
  }
})

// @desc Delete a product
// @route DELETE /api/products/:id
// @access Private/admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    await product.remove()
    res.json({ message: 'Product Removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc Create a product
// @route CREATE /api/products
// @access Private/admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample Name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'sample brand',
    category: 'sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample Description',
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

// @desc Update a product
// @route PUT /api/products/:id
// @access Private/admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body
  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.brand = brand
    product.category = category
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    const preorder = await Preorder.find({}).populate('user', 'name email')

    if (preorder) {
      for (var i = 0; i < preorder.length; i++) {
        //   console.log(preorder[i].preorderItemsPrice)
        //   console.log(preorder[i].preorderItems.name)
        const preorderProduct = preorder[i].preorderItems
        //   //   console.log(preorderProduct)
        for (var j = 0; j < preorderProduct.length; j++) {
          // console.log(preorderProduct[j].name)
          if (product.name === preorderProduct[j].name) {
            console.log(preorder[i].user.email)
            // console.log(preorderProduct[j].name)
            if (product.countInStock > 0) {
              dotenv.config()
              const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: process.env.EMAIL,
                  pass: process.env.PASS,
                },
              })

              let mailDetails = {
                from: process.env.EMAIL,
                to: preorder[i].user.email,
                subject: `Preorder of ${preorderProduct[j].name}`,
                text: `Hey, ${preorder[i].user.name}, The product ${preorderProduct[j].name} with price of $${preorderProduct[j].price} is now back in stock, please visit our website sarkshop.herokuapp.com to add it in your cart. Thank you!`,
              }

              transporter.sendMail(mailDetails, (err, data) => {
                if (err) {
                  console.log('Error')
                } else {
                  console.log('Email sent')
                }
              })
            }
          }
        }
        //   console.log(preorder[i].user)
      }
    }

    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not Found')
  }
})

// @desc create new review
// @route POST /api/products/:id/reviews
// @access Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body
  const product = await Product.findById(req.params.id)

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )
    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Product already reviewed')
    }
    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    product.reviews.push(review)

    product.numReviews = product.reviews.length

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length

    await product.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Product not Found')
  }
})

// @desc get top rated products
// @route POST /api/products/top
// @access public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(5)

  res.json(products)
})

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
}
