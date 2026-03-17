import React from 'react'

import ProductCard from '../components/productCard';

function page() {
  return (
    <div className="bg-gray-50 py-4 px-10 bg-gradient-to-r from-blue-100 to-purple-200">  
      {/* <div className="rounded p-8  mx-auto "><h1 className='text-3xl font-bold text-center my-8 text-blue-600 '>Shop Page</h1>      </div> */}
        
        <div className="flex gap-6 py-6 min-h-screen">
           
            <ProductCard />
          

        </div>
    </div>
  )
}

export default page
