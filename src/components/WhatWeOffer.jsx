import { FaTrophy, FaLock, FaUsers } from 'react-icons/fa';
import { HiArrowRight } from "react-icons/hi2";

const WhatWeOffer = () => {
  return (
    <section id="WhatWeOffer" className="py-28 bg-white px-16 scroll-m-10">
      <div className="container mx-auto px-6 text-left">
        <span className="text-gray-600 text-lg font-semibold uppercase">What We Offer</span>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center">
          <div className="mb-12">
            <h2 className="text-6xl font-bold text-gray-900 mt-2 uppercase w-full md:max-w-xl">Our Top Membership Services For You</h2>
          </div>

          <div className="max-w-xl">
            <p>We offer a range of membership services to help you improve your tennis game. We offer a range of membership services to help you improve your tennis game. We offer a range of membership services to help you improve your tennis game.
            </p>
            <br />
            <p>We offer a range of membership services to help you improve your tennis game. We offer a range of membership services to help you improve your tennis game.
            </p>
          </div>

          <div className="group flex flex-col items-start justify-start bg-white px-6 py-2 border-r-2 border-r-gray-200 mt-6">
            <FaLock className="text-4xl mb-4 text-left" />
            <h4 className="text-3xl font-semibold text-gray-900 uppercase">Lockers & Showers</h4>
            <a href="/services/lockers-showers" className="flex items-center mt-2 text-gray-600 hover:text-gray-900 -translate-x-24 group-hover:translate-x-0  transition-all duration-300 ease-in-out">
              <span className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">READ MORE</span>
              <HiArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
