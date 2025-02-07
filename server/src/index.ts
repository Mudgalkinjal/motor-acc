import express from 'express'
import cors from 'cors'
import productRoutes from './routes/productRoutes'
const app = express()
const PORT = process.env.PORT || 5001

app.use(cors())
app.use(express.json())

app.use('/api/products', productRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
