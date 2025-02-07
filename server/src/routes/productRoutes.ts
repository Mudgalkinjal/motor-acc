import { Router } from 'express'
import { Product, products } from '../models/product'

const router = Router()

// ✅ Get all products
router.get('/', (req, res) => {
  res.json(products)
})

// ✅ Get all bestsellers
router.get('/best', (req, res) => {
  const bestsellers = products.filter((p) => p.bestseller === true)
  res.json(bestsellers)
})

// ✅ Get a single product by ID
router.get('/:id', (req, res) => {
  const product = products.find((p) => p.id === req.params.id)
  if (product) res.json(product)
  else res.status(404).json({ message: 'Product not found' })
})

// // ✅ Add a new product (POST)
// router.post('/', (req, res) => {
//   const { name, price, description, category, bestseller = false } = req.body

//   if (!name || !price || !description || !category) {
//     return res.status(400).json({ message: 'Missing required fields' })
//   }

//   const newProduct: Product = {
//     id: Date.now().toString(),
//     name,
//     price: parseFloat(price), // ✅ Convert price to a number
//     description,
//     category,
//     bestseller,
//   }

//   products.push(newProduct)
//   res.status(201).json(newProduct)
// })

// ✅ Update a product by ID (PUT)
router.put('/:id', (req, res) => {
  const index = products.findIndex((p) => p.id === req.params.id)
  if (index !== -1) {
    products[index] = { ...products[index], ...req.body }
    res.json(products[index])
  } else {
    res.status(404).json({ message: 'Product not found' })
  }
})

// ✅ Delete a product by ID (DELETE)
router.delete('/:id', (req, res) => {
  const index = products.findIndex((p) => p.id === req.params.id)
  if (index !== -1) {
    const deleted = products.splice(index, 1)
    res.json(deleted)
  } else {
    res.status(404).json({ message: 'Product not found' })
  }
})

export default router
