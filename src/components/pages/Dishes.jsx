import React from "react";
import { Star } from "lucide-react";

const dishes = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
    rating: 5,
  },
  {
    id: 2,
    name: "Spicy Ramen Bowl",
    price: "$10.49",
    image: "https://images.unsplash.com/photo-1604908177522-432e3be03cc6",
    rating: 4,
  },
  {
    id: 3,
    name: "Chicken Burger",
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    rating: 5,
  },
  {
    id: 4,
    name: "Pasta Alfredo",
    price: "$11.25",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    rating: 4,
  },
];

const Dishes = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
            Popular Dishes
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Top Selling Dishes
          </h2>
          <p className="text-gray-600 text-lg">
            Our customers’ favorites — freshly made and full of flavor.
          </p>
        </div>

        {/* Dish Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-gray-900">{dish.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: dish.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xl font-extrabold text-orange-500">
                    {dish.price}
                  </span>
                  <button className="px-4 py-2 bg-orange-500 text-white rounded-xl text-sm font-semibold hover:bg-orange-600 transition">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dishes;
