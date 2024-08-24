import { useInView } from "framer-motion";
import { useScrollContext } from "../../context/ScrollContext";
import AboutMe from "./AboutMe";
import AnimationComputer from "./AnimationComputer";
import { useEffect } from "react";
import DotsImg from "./DotsImg";

function Home() {
  const { setActiveLink, homeRef } = useScrollContext();
  const isInView = useInView(homeRef);

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
      <DotsImg />
    </section>
  );
}

export default Home;
