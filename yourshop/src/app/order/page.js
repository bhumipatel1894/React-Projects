"use client";
import React from 'react'
import React, { useEffect, useState } from "react";

function page() {

   const [orderDetails, setOrderDetails] = useState(null);
   useEffect(() => {
    const Orderdata = localStorage.getItem("Order");
    if (Orderdata) {
      setOrderDetails(JSON.parse(Orderdata));
    }
  }, []);

  if (!orderDetails) {
    return <div className="mt-28 text-center">Loading...</div>;
  }
   
  return (
    <section className="min-h-screen items-center text-center justify-center bg-gray-50 mt-28">
       <h2 className="text-2xl font-bold mb-4">Thank you {orderDetails.fullName} for your order!</h2>
       <p className="text-gray-700">
         Your order has been placed successfully. We will process it soon and send you a confirmation email with the details. If you have any questions, please contact our support team.
       </p>
    </section>
  )
}

export default page
