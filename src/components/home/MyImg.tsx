import { PiSealCheckFill } from "react-icons/pi";

function MyImg() {
  return (
    <div className="relative ">
      <img
        src="/my-img.png"
        alt="Fares Ahmed "
        className="w-[250px]  max-sm:mx-auto object-cover aspect-video "
      />
      <PiSealCheckFill className="text-blue-500 text-xl absolute right-[45%] sm:right-0 sm:left-[140px] bottom-2" />
    </div>
  );
}

export default MyImg;
