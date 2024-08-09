import AnimationContact from "./AnimationContact";
import SendMessage from "./SendMessage";
import { useInView } from "framer-motion";
import { useScrollContext } from "../../context/ScrollContext";

import { useEffect } from "react";
function ContactMe() {
  const { setActiveLink, contactRef } = useScrollContext();
  const isInView = useInView(contactRef, { once: false });

  useEffect(() => {
    if (isInView) {
      setActiveLink("Contact");
    }
  }, [isInView, setActiveLink]);
  return (
    <section className="my-3" id="Contact" ref={contactRef}>
      <h3 className="title">Contact Me</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <SendMessage />
        <AnimationContact />
      </div>
    </section>
  );
}

export default ContactMe;
