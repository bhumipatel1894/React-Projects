"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios';
import Link from 'next/link';
import { useContext } from 'react';
import { globalContext } from '@/context/MainContext'

function page() {

  const { id } = useParams();
  let [productData, setProductData] = useState({});
  let [quantity, setQuantity] = useState(1);

  let ProdDetail = () => axios.get(`https://wscubetech.co/ecommerce-api/productdetails.php?id=${id}`)
        .then((res) => res.data)
        .then( (finaldata) => {            
            setProductData(finaldata.product);
        });
    useEffect(() => {
        ProdDetail();
    }, [id]);

    function changeMainImage(img) {
        const mainImage = document.getElementById('mainImage'); 
        if (mainImage) {
            mainImage.src = img;
        }
    }

    function handleImageZoom(e){
        const mainImage = document.getElementById('mainImage');
        if (mainImage) {
            const rect = mainImage.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            mainImage.style.transformOrigin = `${x}% ${y}%`;
            mainImage.style.transform = "scale(1.2)";
        }
    }

    function resetZoom() {
        const mainImage = document.getElementById('mainImage');
        if (mainImage) {
            mainImage.style.transform = "scale(1)";
        }
    }

    let {cart, setCart} = useContext(globalContext);
    let cartobj = { 
        id: productData.id,
        name: productData.name, 
        description: productData.description, 
        price: productData.price, 
        image: productData.image, 
        qty:quantity };

    function addToCart() {

       // let cart = JSON.parse(localStorage.getItem("CART")) || [];
        if (cart.find(item => item.id === cartobj.id)) {
            cart = cart.map(item => item.id === cartobj.id ? {...item, qty: parseInt(item.qty) + parseInt(cartobj.qty)} : item);
        } else {
            cart.push(cartobj);
        }
        localStorage.setItem("CART", JSON.stringify(cart));
        setCart(cart);

        //cart.find(item => item.id != cartobj.id) ? cart.push
       
        // let existingItemIndex = cart.findIndex(item => item.id === product.id);
        // if (existingItemIndex !== -1) {
        //     cart[existingItemIndex].qty = parseInt(cart[existingItemIndex].qty) + parseInt(qty);
        // } else {
        //     cart.push({ ...product, qty });
        // }
        
       
    }


return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image Section */}
                <div className="flex flex-col gap-6">
                    <div className=" relative  rounded-2xl shadow-lg overflow-hidden group">
                        <img 
                            id="mainImage" 
                            src={productData?.image} 
                            alt="Product" 
                            className="w-full h-96 object-contain group-hover:scale-105 transition-transform duration-300"
                            onMouseMove={(e) => handleImageZoom(e)}
                            onMouseLeave={() => resetZoom()}
                        />
                        <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">Sale</div>
                    </div>
                    
                    {/* Featured Images */}
                    <div className="flex gap-3 overflow-x-auto">
                        {productData?.multiple_images?.map((img, idx) => (
                            <img 
                                key={idx}
                                src={img} 
                                alt={`Featured ${idx}`}
                                className="w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all"
                                onClick={() => changeMainImage(img)}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Info Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">{productData?.name}</h1>
                        
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex gap-1 items-center">
                                
                                {
                                     [...Array(Math.round(Number(productData.rating)) || 0)].map((_, i) => (
                                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                                ))
                                }
                           </div>
                            
                        </div>
                    </div>

                    <div className="flex items-center gap-4 pb-6 border-b-2 border-gray-200">
                        <span className="text-4xl font-bold text-blue-600">${productData?.price}</span>
                        {productData?.price && (
                            <span className="text-xl text-gray-400 line-through">${productData?.price}</span>
                        )}
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Description</h3>
                        <p className="text-gray-600 leading-relaxed">{productData?.description}</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4 bg-gray-100 rounded-lg p-4 w-fit">
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold w-8 h-8 rounded" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                            <input type="number" defaultValue="1" className="bg-transparent w-12 text-center text-lg font-bold outline-none" value={quantity}/>
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold w-8 h-8 rounded" onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                        <Link onClick={addToCart} href="#" className="bg-gradient-to-r from-blue-300 to-purple-500 text-white font-bold cursor-pointer text-lg px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition ">
                            🛒 Add to Cart
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default page
