
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-gray-900'>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-4 gap-4 py-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-lg font-bold">eTrade</h1>
            <p className="text-gray-400 text-[13px]">Your trusted partner for all electronic needs. Quality products, competitive prices.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-lg font-bold">Quick Links</h1>
            <ul className="flex flex-col gap-2">
              <li className="text-gray-400 text-[13px]">About Us</li>
              <li className="text-gray-400 text-[13px]">Contact</li>
              <li className="text-gray-400 text-[13px]">Shipping Info</li>
              <li className="text-gray-400 text-[13px]">Returns</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-lg font-bold">Categories</h1>
            <ul className="flex flex-col gap-2">
              <li className="text-gray-400 text-[13px]">Phones</li>
              <li className="text-gray-400 text-[13px]">Computers</li>
              <li className="text-gray-400 text-[13px]">Accessories</li>
              <li className="text-gray-400 text-[13px]">Gaming</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-lg font-bold">Newsletter</h1>
            <p className="text-gray-400 text-[13px]">Subscribe for updates and special offers.</p>
            <form className="flex gap-2">
              <input type="text" placeholder="Email" className="text-gray-400 border-[0.5px] border-gray-400 rounded-sm outline-[0.5px] focus:outline-blue-500 px-2 py-[7px] text-[12px] w-[230px]" />
              <button className="bg-blue-500 text-white text-[13px] px-2 py-[7px] rounded-sm">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center text-gray-400 text-[13px] py-8 border-t border-gray-700">
          © 2024 eTrade. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer
