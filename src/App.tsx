import React, { useReducer, createContext, useEffect, useContext, useRef } from "react";
import "./App.scss";
import NavBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

import setCursorLocation from "./utils/Helpers/setCursorLocation";
import Cursor from "./components/Cursor/Cursor";
import setCursorAppearance from "./utils/Helpers/setCursorAppearance";
import reducer from "./reducers/reducer";
import sampleStore from "./utils/Sample/sampleStore";
import Manifest from "./components/Manifest/Manifest";
import AboutMe from "./components/Aboutme/AboutMe";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Skills from "./components/Skills/Skills";
import ContextMenu from "./components/Contextmenu/ContextMenu";
import toggleContextMenu from "./utils/Helpers/toggleContextMenu";
import hideContextMenu from "./utils/Helpers/hideContextMenu";
import toast, { Toaster } from "react-hot-toast";
import Contact from "./components/Contact/Contact";
import ThemeButton from "./components/Themebutton/ThemeButton";
import clickSound from "./assets/audio/click.mp3";
import playAudio from "./utils/Helpers/playAudio";

// Create store (redux naming convention)
export const store = createContext<any>(null);

// Create store provider to wrap subcomponents in
const StoreProvider = ({ children }: any) => (
  <store.Provider value={useReducer(reducer, sampleStore)}>
    {children}
  </store.Provider>
);

function App() {
  return (
    <StoreProvider>
      <div
        className="App"
        onClick={hideContextMenu}
        onMouseMove={(e) => setCursorLocation(e)}
        onScroll={(e) => setCursorLocation(e)}
        onMouseDown={(e) => setCursorAppearance(e)}
        onMouseUp={(e) => setCursorAppearance(e)}
        onContextMenu={(e) => toggleContextMenu(e)}
      >
        <Toaster />
        <Cursor />
        <NavBar />
        <ThemeButton />
        {/* <LanguageSwitch /> */}
        <ContextMenu />
        <Hero />
        <Manifest />
        <AboutMe />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </div>
    </StoreProvider>
  );
}

export default App;