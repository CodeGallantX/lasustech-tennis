import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="px-8 lg:px-16 xl:px-28 py-20">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <p className="font-bold text-sm uppercase tracking-wide mb-4">Contact Us</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-snug uppercase">
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

          <div className="bg-white">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full px-4 py-3 placeholder:text-black/70 focus:placeholder:text-black border-b-2 border-b-black/20 outline-none hover:border-b-black/100 focus:border-b-black/100 transition-all duration-300 ease-in-out"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 placeholder:text-black/70 focus:placeholder:text-black  border-b-2 border-b-black/20 outline-none hover:border-b-black/100 focus:border-b-black/100 transition-all duration-300 ease-in-out"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="w-full px-4 py-3 placeholder:text-black/70 focus:placeholder:text-black border-b-2 border-b-black/20 outline-none hover:border-b-black/100 focus:border-b-black/100 transition-all duration-300 ease-in-out"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-3 placeholder:text-black/70 focus:placeholder:text-black border-b-2 border-b-black/20 outline-none hover:border-b-black/100 focus:border-b-black/100 transition-all duration-300 ease-in-out"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="How can we help you? Feel free to get in touch!"
                className="w-full px-4 py-3 placeholder:text-black/70 focus:placeholder:text-black border-b-2 border-b-black/20 outline-none hover:border-b-black/100 focus:border-b-black/100 transition-all duration-300 ease-in-out"
                rows="4"
                required
              ></textarea>
              <button
                type="submit"
                className="mt-6 px-10 py-4 bg-[#aed638] text-white font-semibold hover:bg-white hover:text-[#aed638] transition-all duration-300 ease-in-out"
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
