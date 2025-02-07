import React from 'react'
import { useNavigate } from 'react-router-dom'

interface CartItem {
  productId: number
  name: string
  price: number
  quantity: number
}

const Cart: React.FC = () => {
  const navigate = useNavigate()
  const cartItems: CartItem[] = [
    { productId: 1, name: 'Car Cover', price: 999, quantity: 2 },
    { productId: 2, name: 'Car Vacuum Cleaner', price: 1299, quantity: 1 },
  ]

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const handleSubmit = () => {
    navigate('/checkout')
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
          Your Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Your cart is empty.
          </p>
        ) : (
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.productId}
                  className="flex justify-between items-center p-4 border-b border-gray-300 rounded-md bg-gray-50 hover:shadow-md transition-shadow"
                >
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-gray-600">
                      Quantity:{' '}
                      <span className="font-semibold">{item.quantity}</span>
                    </p>
                  </div>
                  <p className="text-green-600 text-lg font-bold">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gray-200 rounded-lg flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">Total:</h3>
              <p className="text-2xl font-bold text-green-600">₹{total}</p>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-md"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
