import { useState } from "react";
import { IoIosSend, IoMdSend } from "react-icons/io";
import { motion } from "framer-motion";

function SendMessage() {
  const [isHover, setIsHover] = useState(false);
  return (
    <section>
      <h5 className="font-bold text-xl md:text-3xl mb-3">
        Send me a message on email
      </h5>

      <div className="border p-3 rounded-lg">
        <p className="text-sm text-second-text">
          If you have any questions or concerns, please don't hesitate to
          contact me. I am open to any work opportunities that align with my
          skills and interests.
        </p>

        <form className="space-y-1 mt-3">
          <label htmlFor="name" className="block">
            Your Name:
          </label>
          <input type="text" className="input" id="name" />{" "}
          <label htmlFor="email" className="block">
            Your Email:
          </label>
          <input type="email" className="input" id="email" />
          <label htmlFor="message" className="block">
            Your Message:
          </label>
          <textarea rows={5} className="input" id="message" />
          <button
            type="submit"
            className="flex-center ml-auto gap-2 p-3 text-bold duration-300 rounded-lg bg-btn-color  text-stone-100 hover:bg-btn-color-hover hover:px-5 max-sm:w-full "
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            Send{" "}
            <motion.span animate={{ rotate: isHover ? 360 : 0 }}>
              {isHover ? (
                <IoMdSend className="text-xl" />
              ) : (
                <IoIosSend className="text-xl" />
              )}
            </motion.span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default SendMessage;
