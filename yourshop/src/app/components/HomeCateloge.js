import React from 'react'
import Link from 'next/link'

function HomeCateloge() {
  return (
    <div id="explore" className=''>
      <div className="px-30 py-30 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Collections</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Beauty - Full Width */}
          <div className="lg:col-span-4 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2 h-80 bg-gradient-to-br from-pink-300 to-pink-500 flex items-center justify-center">
                <span className="text-8xl">
                <img className="object-contain" src="https://c.pxhere.com/photos/c0/63/the_red_pages_shades_makeup_cosmetics_beauty_products-637494.jpg!d" alt="beauty"></img>

                </span>
              </div>
              <div className="p-8 flex flex-col justify-center bg-white">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">Beauty</h2>
                <p className="text-gray-600 mb-6">Discover premium beauty products and cosmetics</p>
                <Link href="/catelog/beauty" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-fit">
                  View More
                </Link>
              </div>
            </div>
          </div>

          {/* Smartphones - Half Width */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="h-64 bg-gradient-to-br from-purple-300 to-purple-500 flex items-center justify-center">
              <span className="text-6xl"><img className="object-contain" src="https://c.pxhere.com/photos/75/49/smartphone_cellphone_apple_i_phone_mobile_communication_social_media_technology_mobile_phones-1265489.jpg!d" alt="Smartphones"></img></span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Smartphones</h2>
              <p className="text-gray-600 text-sm mb-4">Latest tech gadgets</p>
              <Link href="/catelog/smartphones" className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                View More
              </Link>
            </div>
          </div>

          {/* Womens Bags - Half Width */}
          <div className="lg:col-span-2 bg-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="h-64 bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center">
              <span className="text-6xl"><img className="object-contain" src="https://c.pxhere.com/photos/87/f0/bag_crimson_product_photos_padlock_bag_women_bags_dot_white-1000331.jpg!d" srcset="https://c.pxhere.com/photos/87/f0/bag_crimson_product_photos_padlock_bag_women_bags_dot_white-1000331.jpg!d" alt="Womens Bags"></img></span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Womens Bags</h2>
              <p className="text-gray-600 text-sm mb-4">Stylish and elegant bags</p>
              <Link href="/catelog/womens-bags" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                View More
              </Link>
            </div>
          </div>

          {/* Home Decoration - Full Width */}
          <div className="lg:col-span-4 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="p-8 flex flex-col justify-center bg-white">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">Home Decoration</h2>
                <p className="text-gray-600 mb-6">Transform your living space with style</p>
                <Link href="/catelog/home-decoration" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors w-fit">
                  View More
                </Link>
              </div>
              <div className="lg:col-span-2 h-80 bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center">
                <span className="text-8xl"><img className="object-contain" src="https://c.pxhere.com/photos/33/aa/villa_cortine_palace_breakfast_room_restaurant_chandelier_luxury_sirmione_lake_garda_italy-858672.jpg!d" alt="Home Decoration"></img></span>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default HomeCateloge
