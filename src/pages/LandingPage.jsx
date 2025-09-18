import React,{useEffect,useState} from "react";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Stats from "../components/Stats";
import Experience from "../components/Experience";
import Contact from "../components/Contact" 
export default function LandingPage() {

  return (
    <>
      <Hero id="hero" />
      <AboutMe id="about" />
      <Stats id="stats" />
      <Experience id="portfolio" />
      <Services id="services"/>
      <Skills  id="skills"/>
      <Education id="education"/>
      <Projects id="projects"/>
      <Contact id="contact"/>
    </>
  );
}