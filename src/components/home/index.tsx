import AboutMe from "./AboutMe";
import AnimationComputer from "./AnimationComputer";

function Home() {
  return (
    <section className="min-h-[calc(100vh-82px)] grid grid-cols-1 md:grid-cols-2 items-center gap-2 relative">
      <AboutMe />
      <AnimationComputer />
      <img
        src="/dots.png"
        alt="dots"
        className="absolute bottom-0 right-0 opacity-70 h-[120px] max-md:hidden"
      />
    </section>
  );
}

export default Home;
