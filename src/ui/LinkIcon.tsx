function LinkIcon({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="p-3 rounded-lg bg-white text-black duration-300 hover:bg-stone-800 hover:text-white"
    >
      {children}
    </a>
  );
}

export default LinkIcon;
