import { useState } from 'react';
const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <header>
            <div>
                <img src="/logo.jpg" />
            </div>
            <div>
            </div>
            <div>
            </div>
        </header>
    );
};

export default Header;
