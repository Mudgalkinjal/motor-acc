export interface Product {
  id: string
  name: string
  price: number
  description: string
}

export let products: Product[] = [
  {
    id: '1',
    name: 'Sample Product',
    price: 9.99,
    description: 'A sample product',
  },
]
