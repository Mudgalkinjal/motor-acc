import spareParts from '../../data/spareParts.json'

export interface Product {
  id: string
  name: string
  price: number
  description: string
  category: string
}

export let products: Product[] = []

let productCounter = 1
spareParts.forEach((category) => {
  category.parts.forEach((part) => {
    products.push({
      id: `part-${productCounter++}`,
      name: part.name,
      price: parseFloat((Math.random() * 100).toFixed(2)),
      description: part.description,
      category: category.main_type,
    })
  })
})
