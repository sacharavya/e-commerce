import asyncHandler from 'express-async-handler'
import Preorder from '../models/preorderModel.js'
import Product from '../models/productModel.js'

export const sendPreorderConfirmationEmail = asyncHandler(async (req, res) => {
  //   const { name } = req.body
  const product = await Product.findById(req.params.id)
  //   console.log(product.name)
  const preorder = await Preorder.find({}).populate('user', 'email')

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
          console.log(preorderProduct[j].name)
          if (product.countInStock > 0) {
            console.log(product.countInStock)
          }
        }
      }
      //   console.log(preorder[i].user)
    }
  }
})

// const sendOrderConfirmationEmail = () => {}

// const sendPasswordResetEmail = () => {}

export default { sendPreorderConfirmationEmail }
