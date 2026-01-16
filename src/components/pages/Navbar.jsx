"use client";

import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-gray-900">
          Foodie<span className="text-orange-500">.</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link
            href={"/"}
            className="hover:text-orange-500 transition cursor-pointer"
          >
            Home
          </Link>
          <Link
            href={"/food"}
            className="hover:text-orange-500 transition cursor-pointer"
          >
            Food
          </Link>
          <Link
            href={"/menu"}
            className="hover:text-orange-500 transition cursor-pointer"
          >
            Menu
          </Link>
          <Link
            href={"/about"}
            className="hover:text-orange-500 transition cursor-pointer"
          >
            About
          </Link>
          <Link
            href={"/offers"}
            className="hover:text-orange-500 transition cursor-pointer"
          >
            Offers
          </Link>
          <Link
            href={"/contact"}
            className="hover:text-orange-500 transition cursor-pointer"
          >
            Contact
          </Link>
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={"/login"}
            className="hover:text-orange-500 transition cursor-pointer font-medium text-gray-700"
          >
            Login
          </Link>
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
            <ShoppingCart size={22} />
          </button>
          <button className="px-6 py-2 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition shadow">
            Order Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-4 px-6 py-6 font-medium text-gray-700">
            <Link
              href={"/"}
              className="hover:text-orange-500 transition cursor-pointer"
            >
              Home
            </Link>
            <Link
              href={"/food"}
              className="hover:text-orange-500 transition cursor-pointer"
            >
              Food
            </Link>
            <Link
              href={"/menu"}
              className="hover:text-orange-500 transition cursor-pointer"
            >
              Menu
            </Link>
            <Link
              href={"/about"}
              className="hover:text-orange-500 transition cursor-pointer"
            >
              About
            </Link>
            <Link
              href={"/offers"}
              className="hover:text-orange-500 transition cursor-pointer"
            >
              Offers
            </Link>
            <Link
              href={"/contact"}
              className="hover:text-orange-500 transition cursor-pointer"
            >
              Contact
            </Link>
            <Link
              href={"/login"}
              className="hover:text-orange-500 transition cursor-pointer font-medium text-gray-700"
            >
              Login
            </Link>
            <button className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold">
              Order Now
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
