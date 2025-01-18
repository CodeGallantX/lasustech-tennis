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
                <ul>
                </ul>
            </nav>
            <div>
            </div>
        </header>
    );
};

export default Header;
