import { Clock, Percent } from "lucide-react";



export const metadata = {
  title: "Offers",
  description: "Best Fast Food In Dhaka,Bangladesh",
};

const offers = [
  {
    id: 1,
    title: "30% Off on First Order",
    description: "Get a 30% discount when you order for the first time.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    duration: "Valid Today Only",
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Free Pizza",
    description: "Order any medium pizza and get another one free.",
    image: "https://images.unsplash.com/photo-1601924582975-c36c946c1f7c",
    duration: "Limited Offer",
  },
  {
    id: 3,
    title: "Free Dessert on Orders $50+",
    description: "Get a complimentary dessert with orders above $50.",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
    duration: "This Weekend Only",
  },
];

const Offers = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
            Special Offers
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Exclusive Deals & Promotions
          </h2>
          <p className="text-gray-600 text-lg">
            Don’t miss out on our latest offers to enjoy delicious meals at amazing prices.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden group"
            >
              {/* Offer Image */}
              <div className="relative overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  <Percent size={16} />
                  {offer.title.split(" ")[0]} Off
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-gray-900">{offer.title}</h3>
                <p className="text-gray-600">{offer.description}</p>

                <div className="flex items-center gap-2 text-gray-500 text-sm mt-3">
                  <Clock size={16} />
                  <span>{offer.duration}</span>
                </div>

                <button className="mt-4 w-full py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition shadow">
                  Grab Offer
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Offers;
