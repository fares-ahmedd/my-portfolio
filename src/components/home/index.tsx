import { useInView } from "framer-motion";
import { useScrollContext } from "../../context/ScrollContext";
import AboutMe from "./AboutMe";
import AnimationComputer from "./AnimationComputer";
import { useEffect } from "react";

function Home() {
  const { setActiveLink, homeRef } = useScrollContext();
  const isInView = useInView(homeRef, { once: false });

  useEffect(() => {
    if (isInView) {
      setActiveLink("Home");
    }
  }, [isInView, setActiveLink]);
  return (
    <section
      id="Home"
      ref={homeRef}
      className="min-h-[calc(100vh-82px)] grid grid-cols-1 md:grid-cols-2 items-center gap-2 relative"
    >
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
