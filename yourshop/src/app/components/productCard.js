"use client"
import React, {  useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';

function productCard() {

        let [products, setProducts] = React.useState([]);
        let [categories, setCategories] = useState([]);
        let [brands, setBrands] = useState([]);
        let [loading, setLoading] = useState(true);

        // Filter State
        let [selectedCategories, setSelectedCategories] = useState([]);
        let [selectedBrands, setSelectedBrands] = useState([]);
        let [selectedPriceRange, setSelectedPriceRange] = useState(null);
        
        // Fetch Products https://api.escuelajs.co/api/v1/products
        let ProdData = () => axios.get('https://wscubetech.co/ecommerce-api/products.php', { params: {
            page: '1',
            limit: 12,
            price_from: selectedPriceRange ? selectedPriceRange.from : '0',
            price_to: selectedPriceRange ? selectedPriceRange.to : '1000000',
            discount_from: null,
            discount_to: null,
            search: null,
            rating: null,
            sorting: '1',
            categories: selectedCategories.toString(","),
            brands: selectedBrands.toString(",")
        }
        })
        .then((res) => 
        {      
            setProducts(res.data.data);
            setLoading(false);
        }
    );

        // Fetch Categories https://api.escuelajs.co/api/v1/categories
        let getCategories = () => axios.get('https://wscubetech.co/ecommerce-api/categories.php')
        .then( (res) => { 
           
            setCategories(res.data.data);
        });
        // Fetch Brands
        let getBrands = () => axios.get('https://wscubetech.co/ecommerce-api/brands.php')
        .then((res) => res.data)
        .then( (finalresp) => { 
            setBrands(finalresp.data);
        });

        useEffect(() => {
        getCategories();
         getBrands();
        ProdData();
        }, []);

        useEffect(() => {
        ProdData();
        }, [selectedCategories, selectedBrands, selectedPriceRange]);

        // Filters Update
        let updatecategory = (e) => {
            if(selectedCategories.includes(e.target.value)){
                setSelectedCategories(selectedCategories.filter(item => item !== e.target.value));
            } else {
                setSelectedCategories([...selectedCategories, e.target.value]);
            }            
        }
        let updatebrand = (e) => {
               if(selectedBrands.includes(e.target.value)){
                setSelectedBrands(selectedBrands.filter(item => item !== e.target.value));
            } else {
                setSelectedBrands([...selectedBrands, e.target.value]);
            }          
        }

        let updateprice = (e) => {
                let priceRange = e.target.value;
        setSelectedPriceRange(priceRange.split('-').reduce((acc, val, idx) => {
                if(idx === 0) acc.from = val;
                if(idx === 1) acc.to = val;
                return acc;
        }, {}));
            
        }

        let clearFilters = () => {
            setSelectedCategories([]);
            setSelectedBrands([]);
                setSelectedPriceRange(null);
                window.location.reload();
        }

       
       
return (
    <>
       <div className="w-64 bg-white rounded-lg shadow-md p-6 h-fit sticky top-6 ">
                <button className="mb-6 w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition cursor-pointer" onClick={() => clearFilters()}>Clear All Filters</button>
                <h2 className="text-xl font-bold mb-4">Filters</h2>
                
                {/* Category Filter */}
                {Array.isArray(categories) && categories.length > 0 && ( 
                <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3">Category</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                    {categories.map(cat => (
                    <label key={cat.id} className="flex items-center cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 mr-2" value={cat.slug} onClick={(e)=>{updatecategory(e)}}/>
                        <span className="text-gray-700">{cat.name}</span>
                    </label>
                    ))}
                </div>
                </div> ) }

                 {/* Brand Filter */}
                {Array.isArray(brands) && brands.length > 0 && ( 
                <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3">Brands</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                    {brands.map(brand => (
                    <label key={brand.id} className="flex items-center cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 mr-2" value={brand.slug} onClick={(e)=>{updatebrand(e)}}/>
                        <span className="text-gray-700">{brand.name}</span>
                    </label>
                    ))}
                </div>
                </div> ) }
                
                {/* Price Range Filter */}
                <div>
                <h3 className="font-semibold text-lg mb-3">Price Range</h3>
                <div className="space-y-2 max-h-35 overflow-y-auto">
                    {['0-500', '500-1000', '1000-2000', '2000-5000'].map(range => (
                    <label key={range} className="flex items-center cursor-pointer">
                        <input type="radio" name="price" className="w-4 h-4 mr-2" value={range} onClick={(e) => updateprice(e)}/>
                        <span className="text-gray-700">Rs {range}</span>
                    </label>
                    ))}
                        <label className="flex items-center cursor-pointer">
                        <input type="radio" name="price" className="w-4 h-4 mr-2" value="5000-1000000" onClick={(e) => updateprice(e)}/>
                        <span className="text-gray-700">Above 5000</span>
                    </label>
                    
                </div>
                </div>
        </div>

    {
         (loading==true  ? loader() : 
        Array.isArray(products) && products.length > 0 ? (
                <div className='flex-1  p-4'>
                         <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> 
                 {products.map((product) => (

     <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition  p-0.5">
     
            <div className="bg-white rounded-lg overflow-hidden">
            <div className='bg-white '>  
                <img src={product.image} alt={product.name} className="" />
            </div>
    
            <div className="p-4 min-h-[244px]">
                    <p className="text-sm text-blue-600 font-medium">{product.category_name}</p>
                    <h4 className="text-lg font-bold mt-1">{product.name}</h4>
                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
                    <div className="flex justify-between items-center mt-4">
                            <span className="text-xl font-bold text-gray-900">${product.price}</span>
                            <button className=" bg-gradient-to-r from-blue-300 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition ">
                                    <Link href={`/product/${product.id}`} className="text-white">Add to Cart</Link>
                            </button>
                    </div>
            </div>
            </div>
    </div>
    ))}
                </div>
                </div>
                ) : (<div className='flex-1 p-4 text-center font-extrabold text-2xl'><h3 className='items-center mt-40'>No products available.. </h3></div>) )
    }
   
             
    </>
 
)
}

export default productCard

export function loader(){
        return <div className="flex items-center w-[100%] justify-center min-h-screen "><div className="relative w-20 h-20"><div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-600 border-r-indigo-600 animate-spin"></div><div className="absolute inset-2 rounded-full border-4 border-transparent border-b-blue-600 border-l-blue-600 animate-spin animation-delay-200" style={{animationDirection: 'reverse'}}></div><div className="absolute inset-4 rounded-full border-2 border-indigo-300 animate-pulse"></div></div></div>
}
