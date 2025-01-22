import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  HiMiniBars3BottomLeft,
  HiOutlineShoppingBag,
  HiMiniXMark,
  HiMagnifyingGlass,
  HiArrowRight,
} from "react-icons/hi2";

import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0.8rem 3rem;
  width: 100%;
  z-index: 50;
  transition: background-color 0.3s ease-in-out;
  background-color: ${({ isHomePage, scrolled }) =>
    isHomePage && !scrolled ? "transparent" : "black"};
`;

const Navbar = styled.nav`
  display: none;
  list-style: none;
  font-size: 18px;
  font-weight: bold;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      color: white;
      text-decoration: none;
      position: relative;

      &:hover::after,
      &.active::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        height: 2px;
        width: 100%;
        background: white;
      }
    }
  }
`;

const MobileMenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  font-size: 2rem;
  color: white;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: ${({ isSidebarOpen }) => (isSidebarOpen ? "0" : "-100%")};
  left: 0;
  width: 100%;
  height: 100vh;
  background: black;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  transition: top 0.3s ease-in-out;

  a {
    color: white;
    font-size: 1.5rem;
    text-decoration: none;

    &:hover {
      color: gray;
    }
  }

  button {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 2rem;
    color: white;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .icon {
    position: relative;
    color: white;
    font-size: 2rem;

    &.cart {
      &::after {
        content: "0";
        position: absolute;
        top: -5px;
        right: -5px;
        background: #aed638;
        color: white;
        font-size: 0.75rem;
        font-weight: bold;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }
`;

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderContainer isHomePage={isHomePage} scrolled={scrolled}>
      <HeaderContent>
        <Logo>
          <img src="/logo_cropped.jpg" alt="Logo" />
          <span>LASUSTECH TENNIS CLUB</span>
        </Logo>

        <Navbar>
          <li>
            <a href="/" className={isHomePage ? "active" : ""}>
              HOME
            </a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="#">EVENTS</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </Navbar>

        <div className="flex flex-row items-center justify-center space-x-8">
          <IconsContainer>
            <div className="icon cart">
              <HiOutlineShoppingBag />
            </div>
            <div className="icon">
              <HiMagnifyingGlass />
            </div>
          </IconsContainer>
          <a
            href="/membership-form"
            className="px-10 py-4 bg-[#aed638] text-white text-sm font-semibold hover:bg-white hover:text-[#aed638] transition"
          >
            JOIN OUR CLUB
          </a>
        </div>
        <MobileMenuButton onClick={toggleSidebar}>
          <HiMiniBars3BottomLeft />
        </MobileMenuButton>
      </HeaderContent>

      <Sidebar isSidebarOpen={isSidebarOpen}>
        <button onClick={toggleSidebar}>
          <HiMiniXMark className="text-4xl hover:rotate-180 transition-all duration-300 ease-in-out" />
        </button>
        <div>
          <ul className="text-5xl flex flex-col items-start justify-center space-y-2 font-semibold">
            <li className="text-white">
              <a href="/">
                HOME <HiArrowRight className="ml-4 inline-block" />
              </a>
            </li>
            <li className="text-white/70 hover:opacity-100">
              <a href="/about">PAGES</a>
            </li>
            <li className="text-white/70 hover:opacity-100">
              <a href="#">EVENTS</a>
            </li>
            <li className="text-white/70 hover:opacity-100">
              <a href="#">CONTACT</a>
            </li>
          </ul>
        </div>
      </Sidebar>
    </HeaderContainer>
  );
};

export default Header;
