import { FaFacebook, FaTwitter, FaDribbble, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-28 px-8 lg:px-16 xl:px-20">
      <div className="">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            We&apos;re proud to be <br /> the best
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h6 className="text-lg font-semibold mb-4">Address</h6>
            <p className="text-sm">
              The USA — <br />
              11792 London Rd, Derby, <br />
              OH 43117, US
            </p>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Say Hello</h6>
            <p className="text-sm mb-2">
              <a
                href="mailto:info@email.com"
                className="underline hover:text-gray-400"
              >
                info@email.com
              </a>
            </p>
            <p className="text-sm">
              <a href="tel:+18005554565" className="hover:text-gray-400">
                +1 800 555 45 65
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Socials</h6>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/ThemeRexStudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-blue-500"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/ThemerexThemes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-blue-400"
              >
                <FaTwitter />
              </a>
              <a
                href="https://dribbble.com/ThemeREX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-pink-400"
              >
                <FaDribbble />
              </a>
              <a
                href="https://www.instagram.com/themerex_net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-pink-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Extra Column */}
          <div>
            <h6 className="text-lg font-semibold mb-4">About Us</h6>
            <p className="text-sm">
              We are a dedicated team providing exceptional services with
              integrity and excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
