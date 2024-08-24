import { useScrollContext } from "../../context/ScrollContext";

const linksArr = ["Home", "Skills", "Projects", "Contact"];

function NavLinks({
  isMenu = false,
  onClick,
}: {
  isMenu?: boolean;
  onClick?: () => void;
}) {
  const { activeLink, scrollToSection, setActiveLink } = useScrollContext();

  const handleClick = (link: string) => {
    scrollToSection(link);
    setActiveLink(link);
  };
  return (
    <nav className={`${!isMenu && "max-md:hidden"}`}>
      <ul
        className={`${
          isMenu ? "flex flex-col gap-4  text-lg" : "flex-items-center"
        } gap-3 `}
      >
        {linksArr.map((link) => (
          <li key={link} onClick={onClick}>
            <button
              className={`duration-300 hover:text-highlight-link font-bold ${
                activeLink === link && "text-highlight-link"
              }`}
              onClick={() => handleClick(link)}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
