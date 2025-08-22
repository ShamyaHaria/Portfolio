import React, { useContext, useEffect, useRef } from "react";
import "./Hero.scss";
import { motion } from "framer-motion";
import { store } from "../../App";
import scroll from "../../utils/Helpers/scroll";
import playAudio from "../../utils/Helpers/playAudio";
import Typed from "typed.js";

export default function Hero() {
  const [state, dispatch] = useContext(store);
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let typed: Typed | null = null;

    if (state.language === "english" && typedRef.current) {
      typed = new Typed(typedRef.current, {
        strings: ["a Web", "an Android", "a Blockchain"],
        smartBackspace: true,
        startDelay: 1000,
        typeSpeed: 130,
        backDelay: 1000,
        backSpeed: 60,
        loop: true,
      });
    }

    return () => {
      if (typed) {
        typed.destroy();
      }
    };
  }, [state.language]);

  return (
    <div className={`container-hero ${state.darkmode ? "dark-bg-1" : "light-bg-1"}`}>
      <div className="anchor" id="hero" />
      <motion.div
        className="container-avatar"
        initial={{ opacity: 0, y: 350 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.6 }}
      >
        <img
          className="img-avatar"
          src={require("../../assets/images/avatar_test.png")}
          alt="Avatar"
        />
      </motion.div>

      <motion.h2
        className={`${state.darkmode ? "white-opacity" : "light-eyebrow"}`}
        initial={{ opacity: 0, y: 140 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          opacity: { duration: 0.2, type: "tween" },
          y: { duration: 0.55, type: "spring" },
        }}
      >
        Shamya Haria
      </motion.h2>

      <motion.h1
        className={`${state.darkmode ? "dark-heading" : "light-heading"}`}
        initial={{ opacity: 0, y: 400 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.29,
          opacity: { duration: 0.2, type: "tween" },
          y: { duration: 0.6, type: "spring" },
        }}
      >
        {state.language === "english" ? (
          <>
            I am <span ref={typedRef}></span>Developer
          </>
        ) : (
          "App & Web Developer"
        )}
      </motion.h1>

      <motion.h4
        className={`${state.darkmode ? "white-opacity-max" : "light-phrase"}`}
        initial={{ opacity: 0, y: 140 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          opacity: { duration: 0.15, type: "tween" },
          y: { duration: 0.55, type: "spring" },
        }}
      >
        {state.language === "english"
          ? "Focused on building intelligent systems that harness artificial intelligence to solve complex, impactful issues."
          : "Focused on building intelligent systems that harness artificial intelligence to solve complex, impactful issues."}
      </motion.h4>

      <motion.button
        onClick={() => scroll("about-me")}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
        initial={{ opacity: 0, y: 140 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          opacity: { duration: 0.15, type: "tween" },
          y: { duration: 0.4, type: "spring" },
        }}
      >
        <h3>{state.language === "english" ? "Find out more!" : "Find out more!"}</h3>
        <img src={require("../../assets/images/arrow.png")} alt="Arrow" />
      </motion.button>
    </div>
  );
}