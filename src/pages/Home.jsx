import React from "react";
import "../css/Home.css";
import IntroSection from "../components/home/IntroSection";
import ProjectSection from "../components/home/ProjectSection";
import SkillSection from "../components/home/SkillSection";
import ContactSection from "../components/home/ContactSection";
import DarkMode from "../components/home/DarkMode";

function Home() {
  return (
    <>
      <IntroSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
      <DarkMode />
    </>
  );
}

export default Home;
