import React from "react";
import { Flame, Clock } from "lucide-react";

const Discount = () => {
  return (
    <section className="py-20 bg-linear-to-r from-orange-500 to-red-500">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/20 text-sm font-semibold">
              <Flame size={16} />
              Limited Time Offer
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Get <span className="text-yellow-300">30% OFF</span>
              <br />
              On Your First Order
            </h2>

            <p className="text-white/90 text-lg max-w-xl">
              Enjoy delicious meals at a special price. Hurry up — this
              exclusive offer won’t last long!
            </p>

            {/* Countdown / Info */}
            <div className="flex items-center gap-3 text-white/90">
              <Clock size={18} />
              <span>Offer ends in 24 hours</span>
            </div>

            {/* CTA */}
            <button className="mt-4 px-8 py-4 bg-white text-orange-600 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg">
              Order Now
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="Special Food Offer"
              className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
