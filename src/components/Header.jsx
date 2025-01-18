import { useState } from "react";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import styled from "styled-components";

const Sidebar = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
  position: fixed;
  top: ${({ isSidebarOpen }) => (isSidebarOpen ? "0" : "-100%")};
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  z-index: 50;
  transition: top 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="flex justify-between items-center px-4 py-2 shadow-md bg-white">
      <div className="flex items-center space-x-2">
        <img src="/logo_cropped.jpg" alt="Logo" className="w-10 h-10" />
        <span className="text-xl font-bold">LASUSTECH TENNIS CLUB</span>
      </div>

      <nav className="hidden lg:flex">
        <ul className="flex flex-row space-x-4 items-center">
          <li>
            <a href="#" className="hover:text-blue-500">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              PAGES
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              EVENTS
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              SHOP
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-4">
        <button className="relative">
          <FiShoppingBag className="w-6 h-6 text-gray-600" />
          <span className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </button>
        <button>
          <FiSearch className="w-6 h-6 text-gray-600" />
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Book a Court
        </button>
        <button
          onClick={toggleSidebar}
          className="block lg:hidden focus:outline-none"
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {/* Sidebar for Mobile Screens */}
      <Sidebar isSidebarOpen={isSidebarOpen}>
        <div className="p-4 flex flex-col h-full">
          <button
            onClick={toggleSidebar}
            className="text-2xl text-gray-600 self-end focus:outline-none"
          >
            ✕
          </button>
          <ul className="mt-8 space-y-4 text-center">
            <li>
              <a href="#" className="text-lg font-semibold hover:text-blue-500">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-semibold hover:text-blue-500">
                PAGES
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-semibold hover:text-blue-500">
                EVENTS
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-semibold hover:text-blue-500">
                SHOP
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-semibold hover:text-blue-500">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </Sidebar>
    </header>
  );
};

export default Header;
