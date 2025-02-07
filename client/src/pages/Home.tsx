import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

interface Product {
  id: number
  name: string
  price: number
  imgSrc: string
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:5001/api/products/best')
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
  })

  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-black relative text-white py-32 bg-no-repeat bg-right bg-cover"
        style={{
          backgroundImage: "url('/jumbotron.jpg')",
          backgroundSize: '100%',
          backgroundPosition: 'right bottom',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-3xl text-left ml-10">
          <h2 className="text-4xl font-extrabold mb-3">Upgrade Your Ride</h2>
          <p className="text-xl text-white/90 mb-5">
            Premium automobile accessories <br />
            for every vehicle.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition"
            onClick={() => navigate('/products')}
          >
            Shop Now
          </motion.button>
        </div>
      </motion.section>

      <section className="container mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold text-gray-800 text-center mb-6"
        >
          Best Sellers
        </motion.h2>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-md transition-all"
              >
                <img
                  src={product.imgSrc}
                  alt={product.name}
                  className="mb-4 w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-blue-600 font-bold text-lg">
                  ₹{product.price}
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                  Buy Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Home
