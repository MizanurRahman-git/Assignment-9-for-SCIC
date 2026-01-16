"use client"

import React from "react";
import { Star } from "lucide-react";

// Example Menu Data
const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
    rating: 5,
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: "$14.49",
    image: "https://images.unsplash.com/photo-1601924582975-c36c946c1f7c",
    rating: 4,
  },
  {
    id: 3,
    name: "Spicy Ramen",
    category: "Asian",
    price: "$10.49",
    image: "https://images.unsplash.com/photo-1604908177522-432e3be03cc6",
    rating: 4,
  },
  {
    id: 4,
    name: "Chicken Burger",
    category: "Burgers",
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    rating: 5,
  },
  {
    id: 5,
    name: "Pasta Alfredo",
    category: "Pasta",
    price: "$11.25",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    rating: 4,
  },
];

const Menu = () => {
  // Optional: filter by category
  const categories = ["All", "Pizza", "Asian", "Burgers", "Pasta"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
            Menu
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our Delicious Dishes
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our carefully curated menu to satisfy your cravings.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-orange-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
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
                    {item.price}
                  </span>
                  <button className="px-4 py-2 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition">
                    Add to Cart
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

export default Menu;
