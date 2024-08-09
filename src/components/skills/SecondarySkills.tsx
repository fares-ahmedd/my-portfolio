import Marquee from "react-fast-marquee";
import { secondarySkills } from "../../utils/secondarySkills";

function SecondarySkills() {
  return (
    <>
      <h4 className="text-center text-second-text font-bold text-xl my-3">
        Secondary Skills
      </h4>
      <Marquee pauseOnHover>
        {secondarySkills.map((skill) => (
          <a
            className="bg-third-background w-[150px] h-[100px] rounded-xl flex flex-col justify-center items-center duration-300 hover:bg-main-background group border  mx-3 "
            href={skill.href}
            target="_blank"
            rel="noreferrer noopener"
            key={skill.title}
          >
            <span className="text-2xl duration-300 group-hover:animate-bounce group-hover:text-3xl">
              {skill.icon}
            </span>
            <span className="mt-2 mx-1 text-sm" title={skill.title}>
              {skill.title}
            </span>
          </a>
        ))}
      </Marquee>
    </>
  );
}

export default SecondarySkills;
