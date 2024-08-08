import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { mySkills } from "../../utils/skills";

function Skills() {
  return (
    <section className="my-3">
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
    </section>
  );
}

export default Skills;
