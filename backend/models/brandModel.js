import mongoose from 'mongoose'

const brandSchema = mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  },
  name: {
    type: String,
    required: true,
  },
})

const Brand = mongoose.model('Brand', brandSchema)
export default Brand
