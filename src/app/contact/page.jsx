import { MapPin, Mail, Phone } from "lucide-react";



export const metadata = {
  title: "Contact",
  description: "Best Fast Food In Dhaka,Bangladesh",
};

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
            Contact Us
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Have questions or want to place a special order? Reach out to us
            anytime, and we will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-orange-500" size={28} />
              <div>
                <h4 className="font-semibold text-gray-900">Address</h4>
                <p className="text-gray-600">123 Food Street, Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-orange-500" size={28} />
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-600">+880 1234 567890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-orange-500" size={28} />
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600">support@foodie.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                placeholder="Your message..."
                rows={5}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition shadow"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
