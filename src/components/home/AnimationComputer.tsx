import Lottie from "lottie-react";
import computer from "../../../public/computer-animation.json";
import { FaHtml5, FaJsSquare } from "react-icons/fa";

function AnimationComputer() {
  return (
    <div className="relative">
      <Lottie animationData={computer} loop={true} autoplay={true}></Lottie>
      <div
        className="absolute top-3 right-3  bg-third-background p-2 rounded-full duration-300 hover:bg-main-background icon-shadow hover:shadow-none hover:animate-pulse"
        title="HTML"
      >
        <FaHtml5 color="#e34c26" className="text-2xl " />
      </div>
      <div
        className="absolute bottom-12 right-3  bg-third-background p-2 rounded-full duration-300 hover:bg-main-background icon-shadow hover:shadow-none hover:animate-pulse"
        title="CSS"
      >
        <FaHtml5 color="#2965f1" className="text-3xl " />
      </div>{" "}
      <div
        className="absolute bottom-3 left-3  bg-third-background p-2 rounded-full duration-300 hover:bg-main-background icon-shadow hover:shadow-none hover:animate-pulse"
        title="Javascript"
      >
        <FaJsSquare color="#c2ad10" className="text-4xl " />
      </div>
    </div>
  );
}

export default AnimationComputer;
