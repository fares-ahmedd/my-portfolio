import { createPortal } from "react-dom";
import NavLinks from "./NavLinks";
import { FaDownload } from "react-icons/fa";

function Header() {
  return createPortal(
    <header className="h-[66px] w-full   mt-2  fixed top-0 left-0  flex-center">
      <div className="bg-green-800 flex-between w-full h-full rounded-xl px-2 container-layout ">
        <h1 className="font-bold text-lg md:text-2xl lg:text-3xl">
          Fares Ahmed
        </h1>

        <NavLinks />

        <div className="flex-center gap-3">
          <h2>hello</h2>
          <button className="button" type="button">
            <span className="button__text">Download Cv</span>
            <FaDownload className="button__icon" />
          </button>
        </div>
      </div>
    </header>,
    document.getElementById("root")!
  );
}

export default Header;
