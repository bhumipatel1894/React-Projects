import Image from "next/image";
import HomeBanner from "./components/HomeBanner";
import HomeCateloge from "./components/HomeCateloge";
import Link from "next/link";

export default function Home() {
  return (
  <>
  <HomeBanner />
   <section className="m-30 px-30 py-20 bg-gradient-to-br from-purple-100 via-pink-300 to-red-300 rounded-xl shadow-2xl overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-black mb-8 text-center text-white drop-shadow-lg">✨ Welcome to YourShop ✨</h2>
          
          <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 hover:bg-white/20 transition transform hover:scale-105">
              <p className="text-4xl font-black text-yellow-300">10K+</p>
              <p className="text-white text-lg font-semibold">Premium Products</p>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 hover:bg-white/20 transition transform hover:scale-105">
              <p className="text-4xl font-black text-cyan-300">50K+</p>
              <p className="text-white text-lg font-semibold">Satisfied Customers</p>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 hover:bg-white/20 transition transform hover:scale-105">
              <p className="text-4xl font-black text-lime-300">24/7</p>
              <p className="text-white text-lg font-semibold">Expert Support</p>
            </div>
          </div>

          <p className="text-xl text-white mb-5 leading-relaxed text-center font-medium drop-shadow">
            🎁 Discover premium products at unbeatable prices. Exclusive deals on gadgets, fashion, and more!
          </p>
          
          <p className="text-xl text-white mb-8 leading-relaxed text-center font-medium drop-shadow">
            🚀 Join thousands of happy shoppers and unlock special rewards. Limited-time offers available now!
          </p>

          <div className="flex justify-center gap-6">
            <Link href="/shop" className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 rounded-full hover:shadow-2xl transition font-bold text-lg transform hover:scale-110">
              🛍️ Shop Now
            </Link>
            <Link href="#explore" className="px-10 py-4 bg-white/20 text-white border-2 border-white rounded-full hover:bg-white/30 transition font-bold text-lg backdrop-blur-sm transform hover:scale-110">
              📚 Explore More
            </Link>
          </div>
        </div>
      </section>
 
  <HomeCateloge/>

  </>
  );
}
