"use client"
import React, { useState } from 'react'
import { useContext } from 'react';
import { globalContext } from '@/context/MainContext'
import Link from "next/link";

export default function page() {

  const { cart } = useContext(globalContext);
  let subtotal = cart.reduce((sum, item) => sum + (item.qty * item.price), 0);

  let [formData, setFormData] = useState({fullName: '', email: '', streetAddress: '', apartment: '', city: '', state: '', zip: '', cardNumber: '', expiryDate: '', cvv: ''});

  let handleInputChange = (e) => {
    setFormData({
    ...formData,
    [e.target.name]: e.target.value,
    })

    localStorage.setItem("Order", JSON.stringify(formData));

    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {

      e.preventDefault();
      const validationErrors = validatePayment();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      console.log("Payment data valid");
    };
    
  }

  return (
   <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <form className="space-y-6" >
              {/* onSubmit={handleSubmit} */}

       
        <div>
          <h3 className="text-lg font-medium mb-3">Contact Information</h3>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Full Name" 
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="fullName"
              value={formData.fullName || ''}
              onChange={handleInputChange}
            /> 

            <input 
              type="email"
              placeholder="Email Address"
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="email"
              value={formData.email || ''}
              onChange={handleInputChange}
            />
          </div>
        </div>

        
        <div>
          <h3 className="text-lg font-medium mb-3">Shipping Address</h3>

          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Street Address"
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="streetAddress"
              value={formData.streetAddress || ''}
              onChange={handleInputChange}
            />

            <input
              type="text"
              placeholder="Apartment, suite, etc (optional)"
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="apartment"
              value={formData.apartment || ''}
              onChange={handleInputChange}
            />

            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="City"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="city"
                value={formData.city || ''}
                onChange={handleInputChange}
              />

              <input
                type="text"
                placeholder="State"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="state"
                value={formData.state || ''}
                onChange={handleInputChange}
              />

              <input
                type="text"
                placeholder="ZIP"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="zip"
                value={formData.zip || ''}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

      
        <div>
          <h3 className="text-lg font-medium mb-3">Payment Details</h3>

          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Card Number"
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="cardNumber"
              value={formData.cardNumber || ''}
              onChange={handleInputChange}
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="expiryDate"
                value={formData.expiryDate || ''}
                onChange={handleInputChange}
              />

              <input
                type="text"
                placeholder="CVV"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="cvv"
                value={formData.cvv || ''}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer">
          <Link href="/order" className="w-full  text-white font-bold p-3 rounded-lg transition"> Place Order</Link>
        </button>
        
        

      </form>
          </div>
        </div>
        {/* Cart Summary */}
        <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-700">
                        <span>Subtotal</span>
                        <span>$ {subtotal}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                        <span>Shipping (Free)</span>
                        <span>$ 0.00</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                        <span>Tax</span>
                        <span>$ 0.00</span>
                    </div>
                </div>
                <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <span>$ {subtotal}</span>
                    </div>
                </div>
               
            </div>
        </div>
      </div>
      </div>
      </div>
  
  )
}

 let validatePayment = () => {
  let errors = {};

  // Card Number (16 digits)
  const cardRegex = /^[0-9]{16}$/;
  if (!cardRegex.test(formData.cardNumber.replace(/\s/g, ""))) {
    errors.cardNumber = "Card number must be 16 digits";
  }

  // Expiry Date MM/YY
  const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (!expiryRegex.test(formData.expiryDate)) {
    errors.expiryDate = "Invalid expiry date format (MM/YY)";
  } else {
    const [month, year] = formData.expiryDate.split("/");
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    if (year < currentYear || (year == currentYear && month < currentMonth)) {
      errors.expiryDate = "Card has expired";
    }
  }

  // CVV (3 or 4 digits)
  const cvvRegex = /^[0-9]{3,4}$/;
  if (!cvvRegex.test(formData.cvv)) {
    errors.cvv = "Invalid CVV";
  }

  return errors;
};