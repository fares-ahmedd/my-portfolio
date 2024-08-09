import Lottie from "lottie-react";
import contact from "../../assets/Contact-Animation.json";
function AnimationContact() {
  return (
    <Lottie
      animationData={contact}
      loop={true}
      autoplay={true}
      className="max-md:hidden max-w-[400px] mx-auto "
    ></Lottie>
  );
}

export default AnimationContact;
