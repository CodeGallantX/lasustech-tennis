const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const closeSidebar = document.getElementById("closeSidebar");
const searchToggle = document.getElementById("searchToggle");
const searchBar = document.getElementById("searchBar");
const header = document.getElementById("header");
const heroSection = document.getElementById("hero"); // Ensure the hero section has this ID

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
});

closeSidebar.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
});

searchToggle.addEventListener("click", () => {
    searchBar.classList.toggle("hidden");
});

window.addEventListener("scroll", () => {
    const heroBottom = heroSection.getBoundingClientRect().bottom;

    if (heroBottom <= 50) {
        header.classList.add("bg-[#333]");
    } else {
        header.classList.remove("bg-[#333]");
    }
});
