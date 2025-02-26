const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.remove("opacity-0", "pointer-events-none");
    } else {
        scrollToTopButton.classList.add("opacity-0", "pointer-events-none");
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});