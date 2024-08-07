const linksArr = ["Home", "Skills", "Projects", "Contact"];

function NavLinks({ isMenu = false }: { isMenu?: boolean }) {
  return (
    <nav className={`${!isMenu && "max-md:hidden"}`}>
      <ul
        className={`${
          isMenu ? "flex flex-col gap-4  text-lg" : "flex-items-center"
        } gap-3 `}
      >
        {linksArr.map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className="duration-300 hover:text-highlight-link font-bold"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
