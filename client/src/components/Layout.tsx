// Layout.tsx
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-2xl font-bold text-white mb-4 md:mb-0">
              Mudgal Motor Accessories
            </h1>
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
              {[
                { to: '/', text: 'Home' },
                { to: '/about', text: 'About' },
                { to: '/products', text: 'Products' },
                { to: '/cart', text: 'Cart' },
                { to: '/checkout', text: 'Checkout' },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? 'text-white border-b-2 border-white'
                          : 'text-blue-100 hover:text-white hover:scale-105'
                      }`
                    }
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="rounded-xl bg-white shadow-sm p-6">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/20 pb-6 mb-6">
            <h2 className="text-xl font-bold mb-4 md:mb-0">
              Premium Auto Solutions
            </h2>
            <div className="flex space-x-6">
              <Link to="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Mudgal Motor Accessories. Crafted
            with precision.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
