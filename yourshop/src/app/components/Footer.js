import React from 'react'

function Footer() {
  return (
<footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-4 gap-8 mb-8">
            {/* Logo */}
            <div>
                <h2 className="text-2xl font-bold text-blue-500">YourShop</h2>
                <p className="text-gray-400 mt-2">Your trusted online store</p>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                    <li><a href="/" className="hover:text-blue-500">Home</a></li>
                    <li><a href="/shop" className="hover:text-blue-500">Shop</a></li>
                    <li><a href="/about" className="hover:text-blue-500">About</a></li>
                    <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
                </ul>
            </div>

            {/* Customer Service */}
            <div>
                <h3 className="font-semibold mb-4">Customer Service</h3>
                <ul className="space-y-2 text-gray-400">
                    <li><a href="/faq" className="hover:text-blue-500">FAQ</a></li>
                    <li><a href="/returns" className="hover:text-blue-500">Returns</a></li>
                    <li><a href="/shipping" className="hover:text-blue-500">Shipping</a></li>
                    <li><a href="/privacy" className="hover:text-blue-500">Privacy</a></li>
                </ul>
            </div>

            {/* Trending Products */}
            <div>
                <h3 className="font-semibold mb-4">Trending Now</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li><a href="#" className="hover:text-blue-500">Latest Gadgets</a></li>
                    <li><a href="#" className="hover:text-blue-500">Best Sellers</a></li>
                    <li><a href="#" className="hover:text-blue-500">On Sale</a></li>
                    <li><a href="#" className="hover:text-blue-500">New Arrivals</a></li>
                </ul>
            </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Bottom Section */}
        <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">
                &copy; 2024 YourShop. All rights reserved.
            </p>
            <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-500">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-blue-500">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-blue-500">Instagram</a>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer
