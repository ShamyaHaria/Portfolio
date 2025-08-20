import React, { useContext } from "react";
import { store } from "../../App";
import { motion } from "framer-motion";
import { ReactComponent as LinkedIn } from "../../assets/images/linkedin.svg";
import { ReactComponent as GitHub } from "../../assets/images/github-mark.svg";
import { ReactComponent as Twitter } from "../../assets/images/twitter.svg";
import { ReactComponent as WhatsApp } from "../../assets/images/whatsapp.svg";
import toast, { Toaster } from "react-hot-toast";
import ContactForm from "../Contactform/ContactForm";
import "./Contact.scss";
import playAudio from "../../utils/Helpers/playAudio";

export default function Contact() {
  const [state, dispatch] = useContext(store);

  const copyEmail = () => {
    navigator.clipboard.writeText("shamyaharia@gmail.com");
    toast("Copied E-Mail" , {
      icon: "📧",
      position: "top-left",
      style: {
        border: state.darkmode
          ? "2px solid hsla(0,0%,51.4%,.16)"
          : "1px solid #ebebeb",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)",
        borderRadius: "14px",
        fontFamily: "Inter",
        color: state.darkmode ? "white" : "#1d1d1f",
        fontSize: "14px",
        backgroundColor: state.darkmode ? "#141414" : "",
      },
    });
  };

  return (
    <div
      className={`contact-container ${
        state.darkmode ? "dark-bg-2" : "light-bg-2"
      }`}
    >
      <div className="anchor" id="contact" />
      <motion.h3
        className={`eyebrow ${
          state.darkmode ? "dark-eyebrow" : "light-eyebrow"
        }`}
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >
        {"Contact"}
      </motion.h3>
      <motion.h1
        className={`heading ${
          state.darkmode ? "dark-heading" : "light-heading"
        }`}
        initial={{ y: 150 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >
        {state.language === "english"
          ? "Reach out to me"
          : "Reach out to me"}
      </motion.h1>

      <p className={`${state.darkmode ? "dark-eyebrow" : "light-phrase"}`}>
        {state.language === "english"
          ? "Please provide your details in the form on the left, and I will respond to your inquiry without delay. You may also reach out to me on the platforms mentioned on the right-hand side."
          : "Please provide your details in the form on the left, and I will respond to your inquiry without delay. You may also reach out to me on the platforms mentioned on the right-hand side."}
      </p>

      <div className="contact-data">
        <motion.div
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.3, delay: 0.3 },
            x: { duration: 0.8, type: "spring", delay: 0.25 },
          }}
        >
          <ContactForm />
        </motion.div>

        <motion.section
          className={`contact-socials-container ${
            state.darkmode ? "dark-card" : "light-card"
          } ${state.darkmode ? "dark-shadow" : "light-shadow"}`}
          initial={{ x: 250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.3, delay: 0.3 },
            x: { duration: 0.8, type: "spring", delay: 0.25 },
          }}
        >
          <a
            target="_blank"
            href="https://www.linkedin.com/in/shamya-haria-b60752230/"
            onMouseDown={playAudio}
            onMouseUp={playAudio}
          >
            <button
              className={`contact-socials-item linkedin ${
                state.darkmode ? "dark-field" : ""
              }`}
            >
              <LinkedIn
                className={`svg ${state.darkmode ? "dark-svg" : "light-svg"}`}
              />
              LinkedIn
            </button>
          </a>

          <a
            target="_blank"
            href="https://github.com/ShamyaHaria"
            onMouseDown={playAudio}
            onMouseUp={playAudio}
          >
            <button
              className={`contact-socials-item github ${
                state.darkmode ? "dark-field" : ""
              }`}
            >
              <GitHub
                className={`svg ${state.darkmode ? "dark-svg" : "light-svg"}`}
              />
              GitHub
            </button>
          </a>

          <a
            target="_blank"
            href="https://x.com/Shamss05"
            onMouseDown={playAudio}
            onMouseUp={playAudio}
          >
            <button
              className={`contact-socials-item twitter ${
                state.darkmode ? "dark-field" : ""
              }`}
            >
              <Twitter
                className={`svg ${state.darkmode ? "dark-svg" : "light-svg"}`}
              />
              Twitter
            </button>
          </a>

          {/* <a
            target="_blank"
            href=""
            onMouseDown={playAudio}
            onMouseUp={playAudio}
          >
            <button
              className={`contact-socials-item whatsapp ${
                state.darkmode ? "dark-field" : ""
              }`}
            >
              <WhatsApp
                className={`svg ${state.darkmode ? "dark-svg" : "light-svg"}`}
              />
              WhatsApp
            </button>
          </a> */}

          <button
            className="email"
            onClick={copyEmail}
            onMouseDown={playAudio}
            onMouseUp={playAudio}
          >
            {state.language === "english" ? "Copy my email" : "Copy my email"}
          </button>
        </motion.section>
      </div>
    </div>
  );
}