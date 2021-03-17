import mongoose from 'mongoose'

const preorderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    preorderItem: {
      name: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
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
