"use client";

export const dynamic = "force-dynamic";

import React, { useEffect, useState } from "react";

function Page() {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const Orderdata = localStorage.getItem("Order");
      if (Orderdata) {
        setOrderDetails(JSON.parse(Orderdata));
      }
    }
  }, []);

  if (!orderDetails) {
    return <div className="mt-28 text-center">Loading...</div>;
  }

  return (
    <section className="min-h-screen items-center text-center justify-center bg-gray-50 mt-28">
      <h2 className="text-2xl font-bold mb-4">
        Thank you {orderDetails.fullName} for your order!
      </h2>
      <p className="text-gray-700">
        Your order has been placed successfully. We will process it soon.
      </p>
    </section>
  );
}

export default Page;