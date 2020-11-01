import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)

app.use(errorHandler)

//Port is used to get the port for desirable port when deploying the app in the web
const port = process.env.PORT || 5000
app.listen(port, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}...`
  )
)
