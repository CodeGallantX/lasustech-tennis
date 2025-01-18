import { useState } from 'react';
const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <header>
            <div>
                <img src="/logo_cropped.jpg" />
                <span>LASUSTECH TENNIS CLUB</span>
            </div>
            <nav>
                <ul className="flex flex-row space-x-4 items-center">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">PAGES</a></li>
                    <li><a href="#">EVENTS</a></li>
                    <li><a href="#">SHOP</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </nav>
            <div>
                
            </div>
        </header>
    );
};

export default Header;
