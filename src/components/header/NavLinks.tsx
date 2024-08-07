const linksArr = ["Home", "Skills", "Projects", "Contact"];

function NavLinks({ isMenu = false }: { isMenu?: boolean }) {
  return (
    <nav className={`${!isMenu && "max-md:hidden"}`}>
      <ul className="flex-items-center gap-3 ">
        {linksArr.map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className="duration-300 hover:text-highlight-link"
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
