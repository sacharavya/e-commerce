import express from 'express'
const router = express.Router()

import {
  addPreOrderItems,
} from '../controllers/preorderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addPreOrderItems)

export default router
