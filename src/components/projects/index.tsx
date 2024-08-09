import { useState } from "react";
import FilterTabs from "./FilterTabs";
import ProjectsList from "./ProjectsList";

const tabs = ["All", "React Js", "Next Js"];

function Projects() {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <section className="my-3">
      <h3 className="title">My Projects</h3>

      <FilterTabs tabs={tabs} selected={selected} setSelected={setSelected} />

      <ProjectsList selected={selected} />
    </section>
  );
}

export default Projects;
