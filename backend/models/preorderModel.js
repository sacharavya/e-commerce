import mongoose from 'mongoose'

const preorderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Product',
    },
    preorderdAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

const Preorder = mongoose.model('Preorder', preorderSchema)

export default Preorder
