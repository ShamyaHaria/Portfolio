import React, { useContext } from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { store } from "../../App";
import scroll from "../../utils/Helpers/scroll";
import playAudio from "../../utils/Helpers/playAudio";

export default function NavBar() {
  const [state, dispatch] = useContext(store);

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.25 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.7 }}
      className={`${state.darkmode ? "dark-nav" : "light-nav"}`}
    >
      <img
        onClick={(e) => scroll("hero")}
        src={require("../../assets/images/icon.png")}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
        alt="icon"
      />
      <h3
        className={`first ${state.darkmode ? "dark-anchor" : "light-anchor"}`}
        onClick={(e) => scroll("about-me")}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        {state.language === "english" ? "About Me" : "About Me"}
      </h3>
      <h3
        className={`${state.darkmode ? "dark-anchor" : "light-anchor"}`}
        onClick={(e) => scroll("portfolio")}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        Portfolio
      </h3>
      <h3
        className={`${state.darkmode ? "dark-anchor" : "light-anchor"}`}
        onClick={(e) => scroll("skills")}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        Skills
      </h3>
      <h3
        className={`${state.darkmode ? "dark-anchor" : "light-anchor"}`}
        onClick={(e) => scroll("resume")}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        {state.language === "english" ? "Resume" : "Resume"}
      </h3>
      <button
        className="btn-nav"
        type="button"
        onClick={(e) => scroll("contact")}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        {state.language === "english" ? "Contact" : "Contact"}
      </button>
    </motion.nav>
  );
}