import React from "react";
import { Pizza, Soup, Sandwich, IceCream, Coffee } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Pizza",
    icon: Pizza,
    items: "120+ Items",
  },
  {
    id: 2,
    name: "Asian Food",
    icon: Soup,
    items: "80+ Items",
  },
  {
    id: 3,
    name: "Burgers",
    icon: Sandwich,
    items: "95+ Items",
  },
  {
    id: 4,
    name: "Desserts",
    icon: IceCream,
    items: "60+ Items",
  },
  {
    id: 5,
    name: "Beverages",
    icon: Coffee,
    items: "50+ Items",
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
            Categories
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our wide range of food categories and find what you love.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4 group-hover:scale-110 transition">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{category.items}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
