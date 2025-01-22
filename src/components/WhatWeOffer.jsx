import { FaTrophy,  FaLock, FaUsers } from 'react-icons/fa';

const WhatWeOffer = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <div className="mb-12">
          <span className="text-gray-600 text-lg font-semibold">What We Offer</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">Our Top Membership Services For You</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <FaTrophy className="text-blue-500 text-4xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-900">Premium Tools</h4>
            <p className="text-gray-600 mt-2">Access to exclusive premium tools for a better experience.</p>
            <a href="/services/premium-tools" className="text-blue-500 mt-4 inline-flex items-center">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M15.707 9.293a1 1 0 011.414 1.414L10.414 16H16a1 1 0 011 1v-4a1 1 0 10-2 0v2.586L6.293 9.293a1 1 0 00-1.414 1.414L9.586 14H4a1 1 0 100 2h4.586l-5.707 5.707a1 1 0 001.414 1.414L10 15.414l5.707 5.707a1 1 0 101.414-1.414L10.414 14H16a1 1 0 100-2h-5.586l5.707-5.707z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Top Tournaments */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <FaTrophy className="text-red-500 text-4xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-900">Top Tournaments</h4>
            <p className="text-gray-600 mt-2">Join the top tournaments and test your skills against the best.</p>
            <a href="/services/top-tournaments" className="text-red-500 mt-4 inline-flex items-center">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M15.707 9.293a1 1 0 011.414 1.414L10.414 16H16a1 1 0 011 1v-4a1 1 0 10-2 0v2.586L6.293 9.293a1 1 0 00-1.414 1.414L9.586 14H4a1 1 0 100 2h4.586l-5.707 5.707a1 1 0 001.414 1.414L10 15.414l5.707 5.707a1 1 0 101.414-1.414L10.414 14H16a1 1 0 100-2h-5.586l5.707-5.707z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Lockers & Showers */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <FaLock className="text-green-500 text-4xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-900">Lockers & Showers</h4>
            <p className="text-gray-600 mt-2">Keep your belongings safe in our secure lockers, and freshen up in our showers.</p>
            <a href="/services/lockers-showers" className="text-green-500 mt-4 inline-flex items-center">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M15.707 9.293a1 1 0 011.414 1.414L10.414 16H16a1 1 0 011 1v-4a1 1 0 10-2 0v2.586L6.293 9.293a1 1 0 00-1.414 1.414L9.586 14H4a1 1 0 100 2h4.586l-5.707 5.707a1 1 0 001.414 1.414L10 15.414l5.707 5.707a1 1 0 101.414-1.414L10.414 14H16a1 1 0 100-2h-5.586l5.707-5.707z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Expert Supervision */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <FaUsers className="text-yellow-500 text-4xl mb-4" />
            <h4 className="text-xl font-semibold text-gray-900">Expert Supervision</h4>
            <p className="text-gray-600 mt-2">Get professional guidance from our experienced experts to help you grow.</p>
            <a href="/services/expert-supervision" className="text-yellow-500 mt-4 inline-flex items-center">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M15.707 9.293a1 1 0 011.414 1.414L10.414 16H16a1 1 0 011 1v-4a1 1 0 10-2 0v2.586L6.293 9.293a1 1 0 00-1.414 1.414L9.586 14H4a1 1 0 100 2h4.586l-5.707 5.707a1 1 0 001.414 1.414L10 15.414l5.707 5.707a1 1 0 101.414-1.414L10.414 14H16a1 1 0 100-2h-5.586l5.707-5.707z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
