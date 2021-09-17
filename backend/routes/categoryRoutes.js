import express from 'express'
const router = express.Router()

import { protect, admin } from '../middleware/authMiddleware.js'
import {
  createCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from '../controllers/categoryController.js'

router.route('/').get(getCategory).post(protect, admin, createCategory)
router
  .route('/:id')
  .put(protect, admin, updateCategory)
  .delete(protect, admin, deleteCategory)

export default router
