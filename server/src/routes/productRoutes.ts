import { Router } from 'express'
import { Product, products } from '../models/product'

const router = Router()

router.get('/', (req, res) => {
  res.json(products)
})

router.get('/:id', (req, res) => {
  const product = products.find((p) => p.id === req.params.id)
  if (product) res.json(product)
  else res.status(404).json({ message: 'Product not found' })
})

router.post('/', (req, res) => {
  const newProduct: Product = {
    id: Date.now().toString(),
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
  }
  products.push(newProduct)
  res.status(201).json(newProduct)
})

router.put('/:id', (req, res) => {
  const index = products.findIndex((p) => p.id === req.params.id)
  if (index !== -1) {
    products[index] = { ...products[index], ...req.body }
    res.json(products[index])
  } else res.status(404).json({ message: 'Product not found' })
})

router.delete('/:id', (req, res) => {
  const index = products.findIndex((p) => p.id === req.params.id)
  if (index !== -1) {
    const deleted = products.splice(index, 1)
    res.json(deleted)
  } else res.status(404).json({ message: 'Product not found' })
})

export default router
