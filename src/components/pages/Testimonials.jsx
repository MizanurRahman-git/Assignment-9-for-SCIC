import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Food Lover",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "Absolutely delicious! The food arrived hot and fresh. This is my go-to place for quick meals.",
  },
  {
    id: 2,
    name: "James Miller",
    role: "Regular Customer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "Amazing taste and fast delivery. Their burgers and pizzas are simply outstanding!",
  },
  {
    id: 3,
    name: "Ayesha Khan",
    role: "Verified Buyer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    review:
      "Great quality food and reasonable prices. Customer service is very responsive.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
            Testimonials
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg">
            Real reviews from real customers who love our food.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                “{item.review}”
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <span className="text-sm text-gray-500">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
