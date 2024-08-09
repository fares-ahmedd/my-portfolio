function LinkIcon({
  children,
  href,
  title,
}: {
  children: React.ReactNode;
  href: string;
  title?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="p-3 rounded-lg relative bg-white text-black duration-300 hover:bg-stone-800 hover:text-white group"
    >
      {children}

      <span className="absolute block z-[99999] select-none pointer-events-none duration-300 text-sm p-2 bg-stone-800 text-white  rounded-lg -top-10 -left-2 opacity-0 group-hover:opacity-100 ">
        {title}
      </span>
    </a>
  );
}

export default LinkIcon;
