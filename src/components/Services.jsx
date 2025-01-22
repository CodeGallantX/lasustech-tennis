import { FaCalendar, FaShower, FaShoppingBag, FaWifi, FaParking } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <section className="px-8 lg:px-16 xl:px-28 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm uppercase text-blue-500 tracking-widest">Contact us now</span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2">
            Our top membership services for you
          </h1>
          <p className="mt-4 text-gray-600">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 shadow-md rounded-md text-center">
            {/* <FaTennisRacket className="text-4xl text-blue-500 mx-auto mb-4" /> */}
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Expert Supervision</h4>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md text-center">
            <FaCalendar className="text-4xl text-blue-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Flexible Schedule</h4>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md text-center">
            <FaShower className="text-4xl text-blue-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Locker & Shower</h4>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md text-center">
            <FaShoppingBag className="text-4xl text-blue-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Premium Members Shop</h4>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md text-center">
            <FaWifi className="text-4xl text-blue-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Fast Internet</h4>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md text-center">
            <FaParking className="text-4xl text-blue-500 mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Free Parking Spots</h4>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
