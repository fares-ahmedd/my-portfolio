import { useEffect, useState } from "react";

function ToggleTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");
    if (selectedTheme === "dark") {
      document.body.classList.add("dark");
      setIsDark(true);
    } else if (selectedTheme === "light") {
      document.body.classList.add("light");
      setIsDark(false);
    } else {
      document.body.classList.add("dark");
      setIsDark(false);
    }
  }, [isDark]);

  function handleClick() {
    const selectedTheme = localStorage.getItem("theme");
    if (selectedTheme === "dark") {
      setIsDark(false);
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      setIsDark(true);
      localStorage.setItem("theme", "dark");
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }

  return (
    <label className="text-base relative w-[56px] h-[32px]">
      <input
        type="checkbox"
        className="w-0 h-0 opacity-0"
        checked={isDark}
        onChange={() => console.log("Changed")}
      />
      <span className="slider" onClick={handleClick} role="button"></span>
    </label>
  );
}

export default ToggleTheme;
