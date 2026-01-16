import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20">
      <div className="container mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-gray-700">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Foodie<span className="text-orange-500">.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Serving delicious meals made with love. Order your favorite food
              anytime and enjoy fast delivery.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <span>support@foodie.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Foodie. All rights reserved.</p>
          <p className="mt-3 md:mt-0">
            Designed & Developed by{" "}
            <span className="text-orange-400">Foodie Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
