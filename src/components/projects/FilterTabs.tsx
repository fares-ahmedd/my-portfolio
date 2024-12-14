import { motion } from "framer-motion";
import { TABS } from "./index";
type TabsProps = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

function FilterTabs({ selected, setSelected }: TabsProps) {
  return (
    <div className="flex-center bg-main-background p-3 w-fit rounded-lg mx-auto gap-4 mb-4 ">
      {TABS.map((tab) => (
        <Chip
          text={tab}
          active={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
}

export default FilterTabs;

const Chip = ({
  text,
  active,
  setSelected,
}: {
  text: string;
  active: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        active ? "text-white" : " hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {active && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};
