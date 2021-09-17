import express from 'express'
const router = express.Router()

import {
  addPreOrderItems,
  getAllPreOrderItems,
} from '../controllers/preorderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router
  .route('/')
  .get(protect, getAllPreOrderItems)
  .post(protect, addPreOrderItems)

export default router
