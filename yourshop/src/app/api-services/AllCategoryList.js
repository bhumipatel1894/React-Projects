"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';


function AllCategoryList() {

    const [CategoryList, setCategoryList] = useState([]);

    let getCatList = () => axios.get('https://wscubetech.co/ecommerce-api/categories.php')    
        .then((res) => res.data)
        .then( (finalresp) => { 
            setCategoryList(finalresp.data);
        });

        useEffect(() => {
            getCatList();
        }, []);

return (
    (Array.isArray(CategoryList) && CategoryList.length > 0) ? (
            <div className=" absolute pointer-events-none w-full left-0 top-[100px] bg-[#af93dc] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity group-hover:pointer-events-auto" style={{backgroundImage: `url('/images/header-banner.jpg')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'left left',  backgroundOpacity: '0.3'}}>
                <div className='flex'>
                    <div className='w-1/4 '></div>
                    <div className='w-3/4 '>                   
                    
                    <div className="py-6 justify-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
                        
            {CategoryList.map((category) => (
                <>                
                    <div className='py-2' key={category.id}>
                        <Link href={`/catelog/${category.slug}`} className="text-black hover:text-[#af93dc]  hover:bg-blue-50 p-2 ">{category.name}</Link></div>
                </>
                
    )) }
    </div>
    <div className='p-2 text-center text-shadow-indigo-200 text-xl text-white font-sans font-semibold'><h4>Choose your favourite category and enjoy shopping with us!</h4></div>
    </div>
                </div>
</div> 
) : '' ) }
export default AllCategoryList
