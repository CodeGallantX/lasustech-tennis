import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Address Section */}
        <div>
          <h6 className="text-lg font-semibold mb-2">Address</h6>
          <p>The USA — 11792 London Rd, Derby, OH 43117, US</p>
        </div>

        {/* Say Hello Section */}
        <div>
          <h6 className="text-lg font-semibold mb-2">Say Hello</h6>
          <p>
            <a href="mailto:info@email.com" className="text-blue-400 hover:underline">
              info@email.com
            </a>
          </p>
          <p>
            <a href="tel:+18005554565" className="text-blue-400 hover:underline">
              +1 800 555 45 65
            </a>
          </p>
        </div>

        {/* Socials Section */}
        <div>
          <h6 className="text-lg font-semibold mb-2">Socials</h6>
          <ul>
            <li>
              <a href="https://www.facebook.com/ThemeRexStudio" target="_blank" rel="nofollow" className="text-blue-400 hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ThemerexThemes" target="_blank" rel="nofollow" className="text-blue-400 hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/ThemeREX" target="_blank" rel="nofollow" className="text-blue-400 hover:underline">
                Dribbble
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/themerex_net/" target="_blank" rel="nofollow" className="text-blue-400 hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h6 className="text-lg font-semibold mb-2">Newsletter</h6>
          <form action="#" method="post">
            <input
              type="email"
              name="EMAIL"
              placeholder="Enter Your Email Address"
              className="w-full p-2 mb-4 text-black rounded-md"
            />
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                name="i_agree_privacy_policy"
                id="privacy-policy"
                required
                className="mr-2"
              />
              <label htmlFor="privacy-policy" className="text-sm">
                I agree to the{' '}
                <a href="/privacy-policy" className="text-blue-400 hover:underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
