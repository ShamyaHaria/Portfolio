import React, { useContext, useRef } from 'react';
import { store } from '../../App';
import { motion } from "framer-motion";
import './IntroCards.scss';

export default function IntroCards () {
  const [state, dispatch] = useContext(store);
  const scrollRef = useRef(null);

  return (
    <div className="container-intro">
      <section className={`left-intro big-card ${state.darkmode ? "dark-card" : "light-card"}`}>
        <h3 className={`${state.darkmode ? "dark-heading" : "light-heading"}`}>{ "Developer working at the intersection of Design and Technology"}</h3>
        <p className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>{"Starting with HTML, CSS, and JavaScript, I taught myself programming on my own. Over time, my curiosity led me to explore, analyze, and interpret complex data to identify patterns and drive informed decision-making. This naturally progressed into designing systems that can learn from data, recognize trends, and adapt to new information to solve challenging problems in innovative ways."}</p>
      </section>

      <section className="right-intro" ref={scrollRef}>
        <motion.div className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
            <div className="card-top">
                <h2 className="num green">100</h2>
                <h2 className="sign green-sign">+</h2>
            </div>
            <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>Hours of Coding Practice</h4>
        </motion.div>

        <motion.div className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
            initial={{ scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
        >
            <div className="card-top">
                <h2 className="num place blue">{"Won"}</h2>
            </div>
            <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>{state.language === "english" ? `several offline and online hackathons` : `several offline and online hackathons   "`}</h4>
        </motion.div>

        <motion.div className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
            initial={{ scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            <div className="card-top">
                <h2 className="num purple">10</h2>
                <h2 className="sign purple-sign">+</h2>
            </div>
            <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>{state.language === "english" ? "Projects" : "Projects"}</h4>  
        </motion.div>

        <motion.div className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
            initial={{ scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
        >
            <div className="card-top">
                <h2 className="num red">100</h2>
                <h2 className="sign percent red-sign">%</h2>
            </div>
            <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>{state.language === "english" ? "Passion%" : "Passion%"}</h4>
        </motion.div>
      </section>
    </div>
  );
}