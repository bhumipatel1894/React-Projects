import React from 'react'

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        {/* Hero Section */}
        <section className="px-6 py-20 text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">About YourShop</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Revolutionizing the way you shop with premium products and exceptional service
            </p>
        </section>

        {/* Mission Section */}
        <section className="px-6 py-16 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Mission</h2>
                    <p className="text-lg text-slate-600 mb-4">
                        We believe in delivering quality products that enhance your lifestyle. Since 2020, 
                        YourShop has been committed to providing the best shopping experience with curated 
                        collections and outstanding customer support.
                    </p>
                </div>
                <div className="bg-gradient-to-br from-blue-400 to-purple-500 h-96 rounded-lg"></div>
            </div>
        </section>

        {/* Values Section */}
        <section className="px-6 py-16 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Our Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Quality", desc: "Premium products sourced carefully" },
                        { title: "Trust", desc: "Transparent and honest dealings" },
                        { title: "Innovation", desc: "Constantly improving the experience" }
                    ].map((value, i) => (
                        <div key={i} className="p-8 border border-slate-200 rounded-lg hover:shadow-lg transition">
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{value.title}</h3>
                            <p className="text-slate-600">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        

        {/* CTA Section */}
        <section className="px-6 py-16 bg-slate-900 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Shop?</h2>
            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-bold transition">
                Start Shopping Now
            </button>
        </section>
    </div>
  )
}

export default page
