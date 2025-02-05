import React from 'react'
import { FaClock, FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa'

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
      <div className="max-w-3xl bg-white p-8 rounded-lg shadow-md border border-gray-300">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">
          About Mudgal Motor Accessories
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Established in <span className="font-semibold">1972</span>,
          <span className="text-blue-600 font-bold">
            {' '}
            Mudgal Motor Accessories
          </span>
          in Rajarampuri, Kolhapur, is a trusted automobile accessory dealer. We
          offer a vast range of products from brands like <br />
          <span className="font-semibold">
            Maruti Suzuki, Hyundai, Mahindra, Hamaan, Fiat,
          </span>{' '}
          and <span className="font-semibold">Skoda</span>.
        </p>

        <div className="mt-8 p-5 border-l-4 border-blue-600 bg-gray-50 rounded-md">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-600 text-lg" /> Location
          </h2>
          <p className="text-gray-700 mt-2">
            We are located at
            <span className="font-semibold">
              {' '}
              Rajaram Road, G1 A & B M J Market, Rajarampuri, Kolhapur
            </span>
            , easily accessible and well-known in the area.
          </p>
        </div>

        <div className="mt-6 p-5 border-l-4 border-blue-600 bg-gray-50 rounded-md">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <FaClock className="text-blue-600 text-lg" /> Hours of Operation
          </h2>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Monday - Sunday:</span> 10:00 AM -
            8:00 PM
          </p>
        </div>

        <div className="mt-6 p-5 border-l-4 border-blue-600 bg-gray-50 rounded-md">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <FaMoneyBillWave className="text-blue-600 text-lg" /> Payment
            Methods
          </h2>
          <p className="text-gray-700 mt-2">
            We accept payments via
            <span className="font-semibold">
              {' '}
              Cash, UPI, Cheque / Demand Draft, PhonePe, Paytm, BHIM, and G Pay
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
