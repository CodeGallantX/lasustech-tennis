import Header from "./Header";

const Hero = () => {
  return (
    <>
    <Header />
    <section className="relative h-screen flex items-center justify-center text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      <div className="z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-[8rem] text-white font-bold mb-4">MAKE YOUR GAME</h1>
        <p className="text-lg md:text-xl mb-6">
          The academy offers everything you need to become the best
        </p>
        <a
          href="/membership-form"
          className="px-6 py-3 bg-green-500 text-white text-lg font-semibold hover:bg-blue-600 transition"
        >
          Join the Club
        </a>
      </div>
    </section>
    </>
  );
};

export default Hero;
