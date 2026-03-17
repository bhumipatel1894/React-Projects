import React from 'react'

function HomeBanner() {
return (
    
       
            <div className='h-screen bg-cover bg-center bg-no-repeat relative' style={{backgroundImage: 'url(https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&h=600&fit=crop)'}}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-transparent opacity-70"></div>
                <div className="relative h-full flex items-center justify-start">
                    <div className="container mx-auto px-4 pl-12 max-w-2xl">
                        <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            🎉 Exclusive Offers
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                            Summer Collection <span className="text-blue-300">2026</span>
                        </h1>
                        <p className="text-lg text-gray-100 mb-8 max-w-lg">
                            Shop premium products with up to 50% off. Limited time offers on thousands of items.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">
                                Shop Now
                            </button>
                            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg transition">
                                View Catalog
                            </button>
                        </div>
                    </div>
                </div>
            </div>  
        )
}

export default HomeBanner
       
 
