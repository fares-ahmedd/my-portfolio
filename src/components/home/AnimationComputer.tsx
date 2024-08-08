import Lottie from "lottie-react";
import computer from "../../../public/computer-animation.json";

function AnimationComputer() {
  return <Lottie animationData={computer} loop={true} autoplay={true}></Lottie>;
}

export default AnimationComputer;
