import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t-2 text-gray-400 mt-12 p-8">
        <div className=' max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
        <div>
          <h2 className="text-slate-500 text-lg font-semibold mb-4">INDUSTRY</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Retail
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Brands
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Grocery
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                MarkatePlace
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Amazon
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-slate-500 text-lg font-semibold mb-4">USE CASE</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Base Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Dynamic Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Competitor Intelligence
              </a>
            </li>
           
          </ul>
        </div>
        <div>
          <h2 className="text-slate-500 text-lg font-semibold mb-4">COMPANY</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Carriers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Docs
              </a>
            </li>
           
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>founders@askluca.com</p>
          <p>
333 Hayes St,
</p>
          <p>
San Francisco, CA 94102</p>
          <p></p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 Luca Software Inc. All rights reserved.</p>
    </footer>
  )
}

export default Footer