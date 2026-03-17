"use client";
import React from 'react'
import Link from 'next/link'
import AllCategoryList from '../api-services/AllCategoryList'
import { useContext } from 'react';
import { globalContext } from '@/context/MainContext'

function Header() {
  const { cart } = useContext(globalContext);
   let cartcount = cart.reduce((count, item) => count + item.qty, 0);

  return (
    <>
    <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex justify-between items-center h-25">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <h1 className="text-2xl p-4 font-bold text-white bg-gradient-to-r from-blue-300 to-purple-500">YOURSHOP</h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 h-[100%] items-center">
                    <Link href="/" className="px-3 py-2  text-gray-700 font-semibold hover:text-white  items-center hover:bg-gradient-to-r from-blue-300 to-purple-500" >Home</Link>
                    <Link href="/about" className="px-3 py-2  text-gray-700 font-semibold hover:text-white  items-center hover:bg-gradient-to-r from-blue-300 to-purple-500">About</Link>
                    
                    {/* Products Dropdown */}
                    <div className="group h-[100%] items-center p-0 flex">
                        <Link className='px-3 py-2  text-gray-700 font-semibold hover:text-white  items-center hover:bg-gradient-to-r from-blue-300 to-purple-500 ' href="/shop">Shop</Link>
                        <AllCategoryList/>
                    </div>

                    <a href="/contact" className="px-3 py-2  text-gray-700 font-semibold hover:text-white  items-center hover:bg-gradient-to-r from-blue-300 to-purple-500">Contact</a>
                </div>

                {/* Cart Icon */}
                <div className="flex items-center space-x-4">
                    <Link href="/cart" className="relative">
                        <svg className="w-6 h-6 text-gray-700 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m10 0h2m-2 0a2 2 0 11-4 0m4 0a2 2 0 11-4 0" />
                        </svg>
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartcount}</span>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    </header>    
    </>
  )
}

export default Header
