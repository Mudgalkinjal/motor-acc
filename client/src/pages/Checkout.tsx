import React, { useState } from 'react'

const Checkout: React.FC = () => {
  const [address, setAddress] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('Credit Card')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Placing order with', { address, paymentMethod })
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
          Checkout
        </h1>

        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-lg font-semibold text-gray-900">
                Shipping Address
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-lg font-semibold text-gray-900">
                Payment Method
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="Credit Card">Credit Card</option>
                <option value="UPI">UPI</option>
                <option value="Net Banking">Net Banking</option>
                <option value="Cash">Cash on Delivery</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-md"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Checkout
