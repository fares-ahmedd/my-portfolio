import { createPortal } from "react-dom";
import NavLinks from "./NavLinks";
import DownloadCvBtn from "../../ui/DownloadCvBtn";
import ToggleTheme from "./ToggleTheme";
import Menu from "./Menu";
import { useScrollContext } from "../../context/ScrollContext";
function Header() {
  const { activeLink } = useScrollContext();
  const isHome = activeLink === "Home";

  return createPortal(
    <header className="h-[66px] w-full   mt-2  fixed top-0 left-0  flex-center z-[200]">
      <div
        className={`z-50 ${
          isHome ? "bg-second-background" : ""
        } backdrop-blur-sm flex-between  h-full rounded-xl px-2 container-layout`}
      >
        <h1 className="font-bold text-lg md:text-2xl lg:text-3xl">
          Fares Ahmed
        </h1>
        <NavLinks />

        <div className="flex-center gap-3">
          <ToggleTheme />
          <DownloadCvBtn hideMedium={true} />
          <Menu />
        </div>
      </div>
    </header>,
    document.getElementById("root")!
  );
}

export default Header;
