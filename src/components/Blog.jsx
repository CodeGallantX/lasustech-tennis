import { FaRegComment } from "react-icons/fa";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Effective tips on finding your perfect tennis trainer",
      category: "Gameplay",
      date: "Mar 26, 2022",
      comments: 0,
      image:
        "https://tennisclub.themerex.net/wp-content/uploads/2022/03/post-image4-copyright-890x664.jpg",
      link: "https://tennisclub.themerex.net/effective-tips-on-finding-your-perfect-tennis-trainer/",
    },
    {
      id: 2,
      title: "Become a professional tennis player at our club in no time",
      category: "Gameplay",
      date: "Mar 25, 2022",
      comments: 0,
      image:
        "https://tennisclub.themerex.net/wp-content/uploads/2022/03/post-image5-copyright-890x664.jpg",
      link: "https://tennisclub.themerex.net/become-a-professional-tennis-player-at-our-club-in-no-time/",
    },
    {
      id: 3,
      title: "Master your game with professional training",
      category: "News",
      date: "Mar 24, 2022",
      comments: 0,
      image:
        "https://tennisclub.themerex.net/wp-content/uploads/2022/03/post-image6-copyright-890x664.jpg",
      link: "https://tennisclub.themerex.net/master-your-game/",
    },
  ];

  return (
    <section className="px-28 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-blue-500 uppercase font-semibold mb-2">From our blog</p>
          <h1 className="text-4xl font-bold mb-6">Recent News</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-blue-500 font-medium mb-2">
                  {post.category}
                </p>
                <h2 className="text-xl font-semibold mb-4">
                  <a
                    href={post.link}
                    className="hover:text-blue-500 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {post.title}
                  </a>
                </h2>
                <div className="flex items-center justify-between text-gray-500 text-sm">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-1">
                    <FaRegComment />
                    <span>{post.comments} Comments</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
