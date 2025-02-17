import { useRef, useState } from "react";
import { IoIosSend, IoMdSend } from "react-icons/io";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import successAnimation from "../../assets/success-animation.json";

type FormStatus = "idle" | "loading" | "success" | "error";

function SendMessage() {
  const [isHover, setIsHover] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      setFormStatus("loading");
      setErrorMessage("");

      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_ID,
        }
      );

      setFormStatus("success");
      form.current.reset();

      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    } catch (error) {
      setFormStatus("error");
      const errorText =
        error instanceof Error ? error.message : "Unknown error occurred";
      setErrorMessage(errorText);
      console.error("Failed to send email:", errorText);
    }
  };

  return (
    <section>
      <h5 className="font-bold text-xl md:text-3xl mb-3">
        Send me a message on email
      </h5>

      <div className="border p-3 rounded-lg">
        <p className="text-sm text-second-text select-all text mb-2">
          If you have any questions or concerns, please don't hesitate to
          contact me. I am open to any work opportunities that align with my
          skills and interests.
        </p>
        <form
          className="space-y-1"
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
            disabled={formStatus === "loading"}
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
            disabled={formStatus === "loading"}
          />
          <label htmlFor="message" className="block">
            Your Message:
          </label>
          <textarea
            rows={5}
            className="input resize-none"
            id="message"
            required
            minLength={10}
            title="Message must be at least 10 characters long"
            name="message"
            disabled={formStatus === "loading"}
          />

          <StatusMessage
            formStatus={formStatus}
            errorMessage={errorMessage}
            setFormStatus={setFormStatus}
          />

          <button
            type="submit"
            className="flex-center ml-auto gap-2 p-3 text-bold duration-300 rounded-lg bg-btn-color text-stone-100 hover:bg-btn-color-hover hover:w-[110px] max-sm:w-full disabled:bg-slate-700 disabled:text-slate-100 focus:scale-95"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            disabled={formStatus === "loading"}
          >
            {formStatus === "loading" ? (
              "Sending..."
            ) : (
              <>
                Send
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

const StatusMessage = ({
  formStatus,
  errorMessage,
  setFormStatus,
}: {
  formStatus: FormStatus;
  errorMessage?: string;
  setFormStatus: React.Dispatch<React.SetStateAction<FormStatus>>;
}) => {
  switch (formStatus) {
    case "success":
      return (
        <div className="flex flex-col items-center my-2 text-center text-green-800 dark:text-green-500">
          <p>
            Your message has been sent successfully and I will respond to you as
            soon as possible
          </p>
          <Lottie
            animationData={successAnimation}
            loop={false}
            autoplay={true}
            className="w-[100px] h-[100px]"
          />
        </div>
      );
    case "error":
      return (
        <div className="p-3 my-2 text-center text-red-500 bg-red-100 dark:bg-red-900/30 rounded-lg">
          <p>Something went wrong while sending your message.</p>
          {errorMessage && (
            <p className="text-sm mt-1">Error: {errorMessage}</p>
          )}
          <button
            className="mt-2 text-sm underline"
            onClick={() => setFormStatus("idle")}
          >
            Try again
          </button>
        </div>
      );
    default:
      return null;
  }
};
