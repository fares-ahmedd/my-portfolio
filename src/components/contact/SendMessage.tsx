import { useRef, useState } from "react";
import { IoIosSend, IoMdSend } from "react-icons/io";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import successAnimation from "../../assets/success-animation.json";
function SendMessage() {
  const [isHover, setIsHover] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | undefined>(undefined);
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_PUBLIC_ID,
          }
        )
        .then(
          () => {
            setIsLoading(false);
            setIsSuccess(true);
            (e.target as HTMLFormElement).reset();

            console.log("Sent successfully");
          },
          (error) => {
            setIsLoading(false);
            setIsSuccess(false);

            console.log("FAILED...", error.text);
          }
        );
    }
  };

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
        <form
          className="space-y-1 "
          ref={form}
          onSubmit={sendEmail}
          autoComplete="off"
        >
          <label htmlFor="name" className="block">
            Your Name:
          </label>
          <input
            type="text"
            className="input"
            name="user_name"
            id="name"
            autoComplete="off"
            required
            minLength={3}
            pattern=".{3,}"
            title="Name must be at least 3 characters long"
          />
          <label htmlFor="email" className="block">
            Your Email:
          </label>
          <input
            type="email"
            className="input"
            id="email"
            required
            autoComplete="new-email"
            name="user_email"
          />
          <label htmlFor="message" className="block">
            Your Message:
          </label>
          <textarea
            rows={5}
            className="input"
            id="message"
            required
            minLength={10}
            title="Name must be at least 10 characters long"
            name="message"
          />
          {isSuccess && (
            <h4 className="flex-items-center gap-2 my-2 text-center text-green-800 dark:text-green-500 ">
              Your message has been sent successfully and i will respond to you
              as soon as possible{" "}
              <Lottie
                animationData={successAnimation}
                loop={false}
                autoplay={true}
                className="w-[100px] h-[100px]"
              ></Lottie>
            </h4>
          )}{" "}
          {isSuccess === false && (
            <h4 className="flex-items-center gap-2 my-2 text-center text-red-800 dark:text-red-500 ">
              Something went wrong while sending your message to my email !
            </h4>
          )}
          <button
            type="submit"
            className="flex-center ml-auto gap-2 p-3 text-bold duration-300 rounded-lg bg-btn-color  text-stone-100 hover:bg-btn-color-hover hover:px-5 max-sm:w-full disabled:bg-slate-700 disabled:text-slate-100 focus:scale-95 "
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            disabled={isLoading}
          >
            {isLoading ? (
              "Sending..."
            ) : (
              <>
                Send{" "}
                <motion.span animate={{ rotate: isHover ? 360 : 0 }}>
                  {isHover ? (
                    <IoMdSend className="text-xl" />
                  ) : (
                    <IoIosSend className="text-xl" />
                  )}
                </motion.span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default SendMessage;
