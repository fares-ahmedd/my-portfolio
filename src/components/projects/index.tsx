import { useState } from "react";
import FilterTabs from "./FilterTabs";
import ProjectsList from "./ProjectsList";
import { useInView } from "framer-motion";
import { useScrollContext } from "../../context/ScrollContext";
import { useEffect } from "react";

export const TABS = ["All", "React Js", "Next Js"];

function Projects() {
  const [selected, setSelected] = useState(TABS[0]);

  const { setActiveLink, projectsRef } = useScrollContext();
  const isInView = useInView(projectsRef, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      setActiveLink("Projects");
    }
  }, [isInView, setActiveLink]);
  return (
    <section className="py-8" id="Projects" ref={projectsRef}>
      <h3 className="title">My Projects</h3>

      <FilterTabs selected={selected} setSelected={setSelected} />

      <ProjectsList selected={selected} />
    </section>
  );
}

export default Projects;
