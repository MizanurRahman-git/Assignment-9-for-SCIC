import React from "react";
import { CheckCircle } from "lucide-react";


export const metadata = {
  title: "About",
  description: "Best Fast Food In Dhaka,Bangladesh",
};

const AboutUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-orange-100 rounded-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1"
              alt="About our food"
              className="relative z-10 rounded-3xl shadow-xl"
            />
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
              About Us
            </span>

            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              We Serve Quality Food
              <br />
              With Love & Care
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Founded with a passion for great taste, we bring you freshly
              cooked meals made from the finest ingredients. Our mission is
              simple — deliver happiness through food.
            </p>

            <p className="text-gray-600">
              From local favorites to international dishes, our chefs focus on
              quality, hygiene, and unforgettable flavors in every bite.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={22} />
                <span className="font-medium text-gray-700">
                  Fresh Ingredients
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={22} />
                <span className="font-medium text-gray-700">
                  Hygienic Kitchen
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={22} />
                <span className="font-medium text-gray-700">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-orange-500" size={22} />
                <span className="font-medium text-gray-700">
                  Trusted by Thousands
                </span>
              </div>
            </div>

            {/* CTA */}
            <button className="mt-6 px-8 py-4 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
