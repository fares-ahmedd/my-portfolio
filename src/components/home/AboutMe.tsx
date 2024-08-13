import { useState } from "react";
import TypedText from "./TypedText";
import { PiSealCheckFill } from "react-icons/pi";

function AboutMe() {
  const [expanded, setExpanded] = useState(false);
  const aboutMe = `I am Fares Ahmed, a front-end web developer specializing in the creation of user-friendly and responsive web applications. My expertise lies in developing intuitive interfaces and ensuring optimal user experiences across various devices. I excel in collaborative environments, contributing to the development of scalable and accessible software solutions that meet both user needs and industry standards`;

  const words = aboutMe.split(" ");
  const shortText = words.slice(0, 30).join(" ");
  const fullText = aboutMe;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div className="relative">
        <img
          src="/my-img.png"
          alt="Fares Ahmed "
          className="w-[250px] h-[150px] max-sm:mx-auto object-cover "
        />
        <PiSealCheckFill className="text-blue-500 text-xl absolute right-[45%] sm:right-0 sm:left-[140px] bottom-2" />
      </div>
      <p className="flex-items-center gap-1 font-bold">
        Hey There{" "}
        <img
          src={"/waving-hand.gif"}
          alt="Waving Hand Icon"
          width={30}
          height={30}
        />
      </p>
      <h2 className="text-2xl md:text-4xl font-extrabold my-2">
        I'm a Front End
      </h2>
      <p className="flex-items-center gap-2">
        Working with
        <TypedText />
      </p>

      <div className="text-second-text text-sm space-x-1  ">
        <span>{expanded ? fullText : shortText + "..."}</span>
        <button
          onClick={toggleExpanded}
          className="text-primary-text text-sm underline hover:text-highlight-link"
        >
          {expanded ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
