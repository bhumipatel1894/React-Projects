'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import Link from 'next/link'

function page() {
  const { cat } = useParams()
  console.log(cat)
  let [catproducts, setcatProducts] = useState({})

  let prodByCat = () =>
    axios
      .get(`https://wscubetech.co/ecommerce-api/products.php`, {
        params: {
          page: '1',
          limit: '12',
          categories: cat
        }
      })
      .then(res => res.data)
      .then(finaldata => {
        setcatProducts(finaldata.data)
      })
  useEffect(() => {
    prodByCat()
  }, [cat])

  console.log(catproducts)

return (
        <div className="bg-gray-50 p-18 "> 
        <h1 className='text-3xl font-bold text-center my-8 text-blue-600 '>Grab your <span className='text-purple-600'>{cat} </span> Products </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
        Array.isArray(catproducts) && catproducts.length > 0 ? (     catproducts.map((pro) => (
        <div key={pro.id} className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition  p-0.5'>
             <div className='bg-white rounded-lg overflow-hidden'>
                        <div className='w-auto h-52 bg-white' style={{ backgroundImage: `url(${pro.image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}> </div>

                        <div className='p-4 min-h-[244px]'>
                                <p className='text-sm text-blue-600 font-medium'>
                                {pro.category_name}
                                </p>
                                <h4 className='text-lg font-bold mt-1'>
                                Product Name {pro.name}
                                </h4>
                                <p className='text-gray-600 text-sm mt-1'>{pro.description}</p>
                                <div className='flex justify-between items-center mt-4'>
                                        <span className='text-xl font-bold text-gray-900'>
                                                RS {pro.price}
                                        </span>
                                        <button className=' hover:bg-gradient-to-r from-blue-300 to-purple-500 text-white px-4 py-2 rounded-lg bg-blue-700 transition'>
                                                <Link href={`/product/${pro.id}`} className='text-white'>
                                                Add to Cart
                                                </Link>
                                        </button>
                                </div>
                        </div>
                </div>   
        </div>
      ))
) : <h1 className='text-center text-2xl font-bold'>No Products Found</h1>
           }     
        </div>
        </div>
  )
}


export default page
