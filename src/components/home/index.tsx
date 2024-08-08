import AboutMe from "./AboutMe";
import AnimationComputer from "./AnimationComputer";

function Home() {
  return (
    <section className="min-h-[calc(100vh-82px)] grid grid-cols-1 md:grid-cols-2 items-center gap-2">
      <AboutMe />
      <AnimationComputer />
    </section>
  );
}

export default Home;
