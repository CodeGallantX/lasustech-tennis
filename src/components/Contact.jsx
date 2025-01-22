import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <div className="space-y-8">
            <div>
              <p className="text-blue-500 text-sm uppercase tracking-wide">Contact Us</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                Have questions? <br />
                Get in touch!
              </h1>
              <p className="text-gray-600 mt-4">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-500 text-xl" />
                <span className="text-gray-700">
                  11792 London Rd, Derby, OH 43117, US
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-blue-500 text-xl" />
                <a href="tel:+18005554565" className="text-gray-700 hover:text-blue-500">
                  +1 800 555 45 65
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-500 text-xl" />
                <a
                  href="mailto:info@email.com"
                  className="text-gray-700 hover:text-blue-500"
                >
                  info@email.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="How can we help you? Feel free to get in touch!"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
              >
                Get In Touch
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
