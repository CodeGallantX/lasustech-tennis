document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const closeSidebarButton = document.getElementById("close-sidebar");
    const searchButton = document.getElementById("search-button");
    const searchBar = document.getElementById("search-bar");
    
    let isSidebarOpen = false;
    let isSearchVisible = false;

    mobileMenuButton.addEventListener("click", () => {
        isSidebarOpen = !isSidebarOpen;
        sidebar.classList.toggle("top-0", isSidebarOpen);
        sidebar.classList.toggle("-top-full", !isSidebarOpen);
    });

    closeSidebarButton.addEventListener("click", () => {
        isSidebarOpen = false;
        sidebar.classList.remove("top-0");
        sidebar.classList.add("-top-full");
    });

    searchButton.addEventListener("click", () => {
        isSearchVisible = !isSearchVisible;
        searchBar.classList.toggle("hidden", !isSearchVisible);
    });

    window.addEventListener("scroll", () => {
        const header = document.getElementById("header");
        if (window.scrollY > 300) {
            header.classList.add("bg-black");
        } else {
            header.classList.remove("bg-black");
        }
    });
});
