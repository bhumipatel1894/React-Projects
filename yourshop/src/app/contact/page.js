"use client";
import React from "react";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT - CONTACT FORM */}
        <div className="bg-white shadow-2xl rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-500 mb-6">
            Have a question or want to work together? Fill out the form below.
          </p>

          <form className="space-y-5">
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT - MAP + INFO */}
        <div className="space-y-6">
          
          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps?q=Canada&output=embed"
              className="w-full h-[350px] border-0"
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h4 className="font-semibold text-gray-800">Location</h4>
              <p className="text-gray-500 text-sm">Canada</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h4 className="font-semibold text-gray-800">Email</h4>
              <p className="text-gray-500 text-sm">your@email.com</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h4 className="font-semibold text-gray-800">Phone</h4>
              <p className="text-gray-500 text-sm">+1 234 567 890</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h4 className="font-semibold text-gray-800">Availability</h4>
              <p className="text-gray-500 text-sm">Mon - Fri</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}