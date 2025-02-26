document.addEventListener("DOMContentLoaded", () => {
    const posts = [
        {
            id: 1,
            title: "Effective tips on finding your perfect tennis trainer",
            category: "Gameplay",
            date: "Mar 26, 2022",
            comments: 0,
            image: "https://tennisclub.themerex.net/wp-content/uploads/2022/03/post-image4-copyright-890x664.jpg",
            link: "https://tennisclub.themerex.net/effective-tips-on-finding-your-perfect-tennis-trainer/"
        },
        {
            id: 2,
            title: "Become a professional tennis player at our club in no time",
            category: "Gameplay",
            date: "Mar 25, 2022",
            comments: 0,
            image: "https://tennisclub.themerex.net/wp-content/uploads/2022/03/post-image5-copyright-890x664.jpg",
            link: "https://tennisclub.themerex.net/become-a-professional-tennis-player-at-our-club-in-no-time/"
        },
        {
            id: 3,
            title: "Master your game with professional training",
            category: "News",
            date: "Mar 24, 2022",
            comments: 0,
            image: "https://tennisclub.themerex.net/wp-content/uploads/2022/03/post-image6-copyright-890x664.jpg",
            link: "https://tennisclub.themerex.net/master-your-game/"
        }
    ];

    const blogContainer = document.getElementById("blog-posts");
    
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("bg-white", "p-4", "shadow-md");
        
        postElement.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="w-full object-cover h-64">
            <div class="py-4">
                <p class="text-sm font-semibold mb-2 uppercase">${post.category}</p>
                <h2 class="text-2xl font-semibold mb-4 uppercase">
                    <a href="${post.link}" class="hover:text-black/50 transition-colors duration-300 ease" target="_blank" rel="noopener noreferrer">
                        ${post.title}
                    </a>
                </h2>
                <div class="flex items-center space-x-6 text-gray-500 text-sm">
                    <span>${post.date}</span>
                    <span class="w-2 h-2 bg-gray-500 rounded-full"></span>
                    <div class="flex items-center gap-1">
                        <i class="bi bi-chat"></i>
                        <span>${post.comments} Comments</span>
                    </div>
                </div>
            </div>
        `;
        
        blogContainer.appendChild(postElement);
    });
});
