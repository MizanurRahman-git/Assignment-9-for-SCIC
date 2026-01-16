import React from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-linear-to-br from-orange-50 via-white to-red-50 overflow-hidden">
      {/* Decorative Blur Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-red-300 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
            🍽 Fresh & Delicious
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Taste the Best
            <span className="text-orange-500"> Food</span>
            <br /> in Your City
          </h1>

          <p className="text-gray-600 text-lg max-w-xl">
            Discover mouth-watering dishes crafted with passion, delivered fresh
            and fast right to your doorstep.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition shadow-lg">
              Order Now
            </button>
            <button className="px-8 py-4 border border-orange-500 text-orange-500 rounded-xl font-semibold hover:bg-orange-50 transition">
              View Menu
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-500 text-sm">Food Items</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">10k+</h3>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">4.9</h3>
              <p className="text-gray-500 text-sm">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-orange-200 rounded-full blur-2xl opacity-40"></div>
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Delicious Food"
            className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
