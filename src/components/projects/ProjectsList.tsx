import { motion, AnimatePresence } from "framer-motion";

import LinkIcon from "../../ui/LinkIcon";
import { projects } from "../../utils/projects";
import { FaGithub, FaExternalLinkAlt, FaVideo } from "react-icons/fa";

function ProjectsList({ selected }: { selected: string }) {
  let filteredProject;

  if (selected === "React Js") {
    filteredProject = projects.filter(
      (project) => project.category === "React"
    );
  } else if (selected === "Next Js") {
    filteredProject = projects.filter((project) => project.category === "Next");
  } else {
    filteredProject = projects;
  }

  return (
    <motion.ul
      layout
      className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2"
    >
      <AnimatePresence>
        {filteredProject.map((project, index) => (
          <motion.li
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              rotate: index % 2 === 0 ? 1 : -1,
            }}
            className="border bg-third-background rounded-md duration-300 hover:border-yellow-800 dark:hover:border-yellow-600 flex flex-col justify-between "
            key={project.title}
          >
            <img
              src={project.imageSrc}
              alt={`${project.title} Project`}
              className="h-[200px] w-full rounded-t-md"
            />

            <div className="py-3 px-2">
              <h3 className="font-bold text-xl md:text-3xl mb-3">
                {project.title}
              </h3>

              <p className="text-second-text ">
                <span className="text-main-text"> Tech Stack :</span>{" "}
                {project.techniques.map((tec) => (
                  <span key={tec}>{tec} , </span>
                ))}
              </p>
            </div>

            <div className="flex items-center justify-end gap-2 my-3  mx-2">
              <LinkIcon href={project.videoHref} title="Watch">
                <FaVideo />
              </LinkIcon>
              <LinkIcon href={project.githubHref} title="Github">
                <FaGithub />
              </LinkIcon>{" "}
              {project.liveDemoHref && (
                <LinkIcon href={project.liveDemoHref} title="Demo">
                  <FaExternalLinkAlt />
                </LinkIcon>
              )}
            </div>
          </motion.li>
        ))}{" "}
      </AnimatePresence>
    </motion.ul>
  );
}

export default ProjectsList;
