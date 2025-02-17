import { useState } from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function SubmitButton({ children, ...props }: Props) {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      className="flex-center ml-auto gap-2 p-3 text-bold duration-300 rounded-lg bg-btn-color  text-stone-100 hover:bg-btn-color-hover hover:px-5 max-sm:w-full disabled:bg-slate-700 disabled:text-slate-100 focus:scale-95 "
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...props}
    >
      {children}
    </button>
  );
}

export default SubmitButton;

// {isLoading ? (
//     "Sending..."
//   ) : (
//     <>
//       Send
//       <motion.span animate={{ rotate: isHover ? 360 : 0 }}>
//         {isHover ? (
//           <IoMdSend className="text-xl" />
//         ) : (
//           <IoIosSend className="text-xl" />
//         )}
//       </motion.span>
//     </>
//   )}
