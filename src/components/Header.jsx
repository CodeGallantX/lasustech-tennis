import { useState, useEffect } from "react";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import styled from "styled-components";

// Styled Components
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: background-color 0.3s ease-in-out;
  background-color: ${({ scrolled }) => (scrolled ? "black" : "transparent")};
`;

const Navbar = styled.nav`
  display: none;

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
    font-size: 1.5rem;

    &.cart {
      &::after {
        content: "0";
        position: absolute;
        top: -5px;
        right: -5px;
        background: green;
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

// Component
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <HeaderContainer scrolled={scrolled}>
      <HeaderContent>
        {/* Logo */}
        <Logo>
          <img src="/logo_cropped.jpg" alt="Logo" />
          <span>LASUSTECH TENNIS CLUB</span>
        </Logo>

        {/* Desktop Navbar */}
        <Navbar>
          <a href="#" className="active">
            HOME
          </a>
          <a href="#">PAGES</a>
          <a href="#">EVENTS</a>
          <a href="#">SHOP</a>
          <a href="#">CONTACT</a>
        </Navbar>

        {/* Icons */}
        <IconsContainer>
          <div className="icon cart">
            <FiShoppingBag />
          </div>
          <div className="icon">
            <FiSearch />
          </div>
        </IconsContainer>

        {/* Mobile Menu Button */}
        <MobileMenuButton onClick={toggleSidebar}>☰</MobileMenuButton>
      </HeaderContent>

      {/* Sidebar for Mobile Screens */}
      <Sidebar isSidebarOpen={isSidebarOpen}>
        <button onClick={toggleSidebar}>✕</button>
        <a href="#">HOME</a>
        <a href="#">PAGES</a>
        <a href="#">EVENTS</a>
        <a href="#">SHOP</a>
        <a href="#">CONTACT</a>
      </Sidebar>
    </HeaderContainer>
  );
};

export default Header;
