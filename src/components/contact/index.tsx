import AnimationContact from "./AnimationContact";
import SendMessage from "./SendMessage";

function ContactMe() {
  return (
    <section className="my-3">
      <h3 className="title">Contact Me</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <SendMessage />
        <AnimationContact />
      </div>
    </section>
  );
}

export default ContactMe;
