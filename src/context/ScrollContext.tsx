import { createContext, useContext, useRef, useState } from "react";

type ScrollContextTypes = {
  activeLink: string;
  homeRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  scrollToSection: (name: string) => void;
  projectsRef: React.RefObject<HTMLDivElement>;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
};

const ScrollContext = createContext<ScrollContextTypes | undefined>(undefined);

export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeLink, setActiveLink] = useState("Home");
  const homeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  function scrollToSection(name: string) {
    if (name === "Home" && homeRef) {
      homeRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "start",
      });
    }
    if (name === "Skills" && skillsRef) {
      skillsRef.current?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
    if (name === "Projects" && projectsRef) {
      projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    if (name === "Contact" && contactRef) {
      contactRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }
  return (
    <ScrollContext.Provider
      value={{
        activeLink,
        setActiveLink,
        homeRef,
        skillsRef,
        projectsRef,
        contactRef,
        scrollToSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

function useScrollContext() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("Scroll context must be used within a Scroll provider");
  }
  return context;
}

export { useScrollContext };
