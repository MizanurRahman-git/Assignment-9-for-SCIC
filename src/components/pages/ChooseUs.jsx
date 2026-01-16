import React from "react";
import { Truck, ChefHat, Leaf, Star } from "lucide-react";

const ChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            What Makes Our Food Special
          </h2>
          <p className="text-gray-600 text-lg">
            We don’t just serve food — we serve experiences, crafted with
            quality, care, and passion.
          </p>
        </div>

        {/* USP Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="group p-8 bg-gray-50 rounded-2xl hover:bg-orange-50 transition shadow-sm hover:shadow-lg">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 mb-6 group-hover:scale-110 transition">
              <ChefHat size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Expert Chefs
            </h3>
            <p className="text-gray-600">
              Our dishes are prepared by professional chefs with years of
              culinary excellence.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group p-8 bg-gray-50 rounded-2xl hover:bg-orange-50 transition shadow-sm hover:shadow-lg">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 mb-6 group-hover:scale-110 transition">
              <Leaf size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Fresh Ingredients
            </h3>
            <p className="text-gray-600">
              We use only farm-fresh and organic ingredients to ensure top
              quality and taste.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group p-8 bg-gray-50 rounded-2xl hover:bg-orange-50 transition shadow-sm hover:shadow-lg">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 mb-6 group-hover:scale-110 transition">
              <Truck size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Lightning-fast delivery so your food arrives hot, fresh, and on
              time.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group p-8 bg-gray-50 rounded-2xl hover:bg-orange-50 transition shadow-sm hover:shadow-lg">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 mb-6 group-hover:scale-110 transition">
              <Star size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Top Rated</h3>
            <p className="text-gray-600">
              Loved by thousands of customers with consistently high ratings and
              reviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
