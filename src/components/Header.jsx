import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  HiMiniBars3BottomLeft,
  HiMiniXMark,
  HiMagnifyingGlass,
  HiArrowRight,
} from "react-icons/hi2";

import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: background-color 0.3s ease-in-out;
  background-color: ${({ isHomePage, scrolled }) =>
    isHomePage && !scrolled ? "transparent" : "black"};
  padding: 0.5rem 1.5rem;

  @media (min-width: 768px) {
    padding: 0.5rem 2rem;
  }
  @media (min-width: 1024px) {
    padding: 0.75rem 4rem;
  }
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

const JoinButton = styled.a`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    padding: 0.75rem 2rem;
    background: #aed638;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: white;
      color: #aed638;
    }
  }
`;

const SearchBar = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  background: white;
  padding: 0.5rem;
  border-radius: 8px;

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
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
  const [searchVisible, setSearchVisible] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderContainer isHomePage={isHomePage} scrolled={scrolled}>
      <HeaderContent>
        <Logo>
          <img src="/logo_cropped.jpg" alt="Logo" />
          <span className="absolute -top-40 lg:static opacity-0 lg:opacity-100">LASUSTECH TENNIS CLUB</span>
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

        <div className="flex flex-row items-center justify-end space-x-4">
          <HiMagnifyingGlass onClick={toggleSearch} className="hidden lg:block text-white text-3xl cursor-pointer ml-auto" />
          <JoinButton href="/membership-form">JOIN OUR CLUB</JoinButton>
        </div>
        <MobileMenuButton onClick={toggleSidebar}>
          <HiMiniBars3BottomLeft />
        </MobileMenuButton>
      </HeaderContent>

      <SearchBar isVisible={searchVisible}>
        <input type="text" placeholder="Search..." />
      </SearchBar>

      <Sidebar isSidebarOpen={isSidebarOpen}>
        <button onClick={toggleSidebar}>
          <HiMiniXMark />
        </button>
        <ul>
          <li>
            <a href="/">HOME <HiArrowRight /></a>
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
        </ul>
      </Sidebar>
    </HeaderContainer >
  );
};

export default Header;
