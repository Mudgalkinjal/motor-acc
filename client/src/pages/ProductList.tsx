import React, { useEffect, useState } from 'react'

interface Product {
  id: string
  name: string
  price: number
  description: string
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('http://localhost:5001/api/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products')
        }
        return res.json()
      })
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching products:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
          Explore Our Products
        </h1>

        {loading ? (
          <p className="text-center text-gray-500 text-lg">
            Loading products...
          </p>
        ) : error ? (
          <p className="text-center text-red-500 text-lg">Error: {error}</p>
        ) : products.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No products available.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <img className="w-full h-40 object-cover rounded-md mb-4" />
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-green-600 text-lg font-bold mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <button className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList
