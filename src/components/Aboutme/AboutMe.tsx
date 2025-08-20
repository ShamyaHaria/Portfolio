import React, { useContext } from 'react';
import { store } from '../../App';
import { motion } from "framer-motion";
import IntroCards from '../Introcards/IntroCards';
import './AboutMe.scss';
import Showcase from '../Showcase/Showcase';
import EndCards from '../Endcards/EndCards';

export default function AboutMe () {
  const [state, dispatch] = useContext(store);

  return (
    <div className={`container-aboutme ${state.darkmode ? "dark-bg-2" : "light-bg-2"}`}>
      <div className="anchor"  id="about-me" />
      <motion.h3 className={`start eyebrow ${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >{"About Me" }</motion.h3> 
      <motion.h1 className={`heading start ${state.darkmode ? "dark-heading" : "light-heading"}`}
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >{"My Tech Stack and Expertise" }</motion.h1>

      <IntroCards />
      <Showcase />
      <EndCards />
    </div>
  );
}