import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import LinkIcon from "../../ui/LinkIcon";
import { BiLogoGmail } from "react-icons/bi";

function Footer() {
  return (
    <footer className="container-layout p-3 flex-between  gap-3 bg-main-background max-sm:flex-col">
      <small>
        {" "}
        &copy; {new Date().getFullYear()} Fares Ahmed All Rights reserved
      </small>
      <div className="flex-items-center gap-2">
        <LinkIcon href="https://github.com/fares-ahmedd" title="Github">
          <FaGithub />
        </LinkIcon>{" "}
        <LinkIcon
          href="https://www.linkedin.com/in/fares-ahmed-3627b7239/"
          title="Linkedin"
        >
          <FaLinkedin />
        </LinkIcon>
        <LinkIcon href="mailto:fares.haliim@gmail.com" title="Gmail">
          <BiLogoGmail />
        </LinkIcon>{" "}
        <LinkIcon href="https://wa.me/201206953905" title="Whatsapp">
          <FaWhatsapp />
        </LinkIcon>{" "}
        <LinkIcon
          href="https://www.facebook.com/profile.php?id=100005496826371"
          title="Facebook"
        >
          <FaFacebook />
        </LinkIcon>
      </div>
    </footer>
  );
}

export default Footer;
