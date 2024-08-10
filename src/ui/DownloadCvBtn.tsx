import { FaFileDownload } from "react-icons/fa";
function DownloadCvBtn({
  hideMedium = false,
  onClick,
}: {
  hideMedium?: boolean;
  onClick?: () => void;
}) {
  return (
    <a
      className={`relative w-[150px] h-[40px] flex items-center bg-btn-color overflow-hidden rounded-xl transition-all duration-300 hover:bg-btn-color-hover group ${
        hideMedium && "max-md:hidden"
      } mx-auto`}
      title="Download CV"
      href={"/cv.pdf"}
      download={"Fares Ahmed resume"}
      onClick={onClick}
    >
      <span className="transform translate-x-[15px] text-white font-semibold transition-all duration-300 group-hover:translate-x-0">
        Download CV
      </span>
      <span className="absolute transform translate-x-[125px] h-full bg-btn-color-hover flex items-center justify-center w-[25px] transition-all duration-300 group-hover:w-[148px] group-hover:h-[85%] group-hover:translate-x-0">
        <FaFileDownload className="w-5 h-5 text-white" />
      </span>
    </a>
  );
}

export default DownloadCvBtn;
