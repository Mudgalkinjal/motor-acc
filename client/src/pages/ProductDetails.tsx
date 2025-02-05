import React from 'react'

interface Product {
  id: number
  name: string
  description: string
  price: number
  imgSrc: string
}

const ProductDetails: React.FC = () => {
  const product: Product = {
    id: 1,
    name: 'Car Vacuum Cleaner',
    description:
      'High-power cleaner for quick car interior maintenance. Compact and portable design with powerful suction to remove dust, dirt, and debris from your vehicle effortlessly.',
    price: 1299,
    imgSrc: 'https://via.placeholder.com/400',
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-full sm:w-1/2">
            <img
              src={product.imgSrc}
              alt={product.name}
              className="w-full rounded-lg shadow-sm"
            />
          </div>

          <div className="w-full sm:w-1/2">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-700 text-lg mb-4">{product.description}</p>
            <p className="text-green-600 text-2xl font-bold mb-6">
              ₹{product.price}
            </p>

            <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
