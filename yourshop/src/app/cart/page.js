"use client"
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { globalContext } from '@/context/MainContext'
import Link from "next/link";

function page() {

    let {cart, setCart} = useContext(globalContext);

    //let {subTotal, setSubTotal} = useState(100);

    let subtotal = cart.reduce((sum, item) => sum + (item.qty * item.price), 0);

    // useEffect(() => {
    //     const total = cart.reduce((sum, item) => sum + (item.qty * item.price), 0);
    //     setSubTotal(total);
    // }, [cart]);

  return (
   
    <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg shadow">
                        {/* Sample Cart Item */}
                        {cart.map((item) => {
                           // let [itemqty, setitemqty] = React.useState(item.qty || 1)
                           // setCart(cart.map(citem => citem.id === item.id ? {...citem, qty: itemqty} : citem)) 
                            return (
                            <div className="flex gap-4 p-6 border-b" >
                            <img src={item.image} alt="Product" className="w-24 h-24 object-cover rounded" />
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg">{item.name}</h3>
                                <p className="text-gray-600">Price: ${item.price}</p>
                                <div className="flex items-center gap-4 bg-gray-100 rounded-lg p-4 w-fit">
                        Qty:{item.qty}
                        </div>
                                
                            </div>
                            <div className="flex items-top gap-4 ">  <p className="font-bold text-lg">${item.qty*item.price}</p>
                             <p onClick={() => setCart(cart.filter(citem => citem.id !== item.id))} className="items-top cursor-pointer text-red-500 hover:text-red-700 font-semibold">x</p></div>
                           
                        </div>
                        ) } )
                        }
                        
                        {/* More cart items can be added here */}
                    </div>
                </div>

                {/* Cart Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow p-6 sticky top-4">
                        <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-gray-700">
                                <span>Subtotal</span>
                                <span>${subtotal}</span>
                            </div>
                            <div className="flex justify-between text-gray-700">
                                <span>Shipping (Free)</span>
                                <span>$0.00</span>
                            </div>
                            <div className="flex justify-between text-gray-700">
                                <span>Tax</span>
                                <span>$0.00</span>
                            </div>
                        </div>
                        <div className="border-t pt-4 mb-6">
                            <div className="flex justify-between text-xl font-bold">
                                <span>Total</span>
                                <span>${subtotal}</span>
                            </div>
                        </div>
                        <Link href="/checkout" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-lg transition">
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default page
