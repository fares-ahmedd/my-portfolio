import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { mySkills } from "../../utils/skills";
import SecondarySkills from "./SecondarySkills";
import { useInView } from "framer-motion";
import { useScrollContext } from "../../context/ScrollContext";
import { useEffect } from "react";
function Skills() {
  const { setActiveLink, skillsRef } = useScrollContext();
  const isInView = useInView(skillsRef, { once: false });

  useEffect(() => {
    if (isInView) {
      setActiveLink("Skills");
    }
  }, [isInView, setActiveLink]);
  return (
    <section className="my-3" id="Skills" ref={skillsRef}>
      <h3 className="title ">My Skills</h3>
      <VerticalTimeline lineColor="var(--primary-text)">
        {mySkills.map((skill) => (
          <VerticalTimelineElement
            key={skill.title}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "var(--third-background)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  var(--main-text)",
            }}
            iconStyle={{
              background: "var(--third-background)",
              color: `${skill.color}`,
            }}
            icon={skill.icon}
          >
            <h3 className="vertical-timeline-element-title">{skill.title}</h3>
            <p>{skill.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <SecondarySkills />
    </section>
  );
}

export default Skills;
