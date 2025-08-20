import React, { useContext } from "react";
import { store } from "../../App";
import { motion } from "framer-motion";
import "./Showcase.scss";

export default function Showcase() {
  const [state, dispatch] = useContext(store);

  return (
    <div className="container-showcase">
      <div className="showcase-left">
        <motion.h3
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >{state.language === "english" ? "A little insight into my work" : "A little insight into my work"}</motion.h3>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          {state.language === "english" ? "My portfolio showcases my skills in both intricate design and complex development. Explore the possibilities of what we can build together." : "My portfolio showcases my skills in both intricate design and complex development. Explore the possibilities of what we can build together."}
        </motion.p>
      </div>

      <div className="showcase-right">
        <img
          className="screen"
          src={require("../../assets/images/screen5.png")}
        />
        <iframe className="video" src="https://streamable.com/e/1ehwwr?autoplay=1&nocontrols=1" style={{ border: "none", borderRadius: "2px" }} allow="autoplay"></iframe>
      </div>
    </div>
  );
}