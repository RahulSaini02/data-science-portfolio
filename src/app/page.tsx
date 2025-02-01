"use client"

import Contact from "@/components/Contact";
import About from "@/components/Home/About";
import Certifications from "@/components/Home/Certifications";
import Hero from "@/components/Home/Hero";
import Skills from "@/components/Home/Skills";
import TopProjects from "@/components/Home/TopProjects";
import Nav from "@/components/Nav";
import { useRef } from "react";



export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white min-h-screen text-black">
      {/* Navbar */}
      <Nav scrollToSection={scrollToSection}/>
      {/* Hero Section */}
      <Hero />
      {/* Skills Carsoul */}
      <Skills />
      {/* About */}
      <About />
      {/* Projects */}
      <TopProjects />
      {/* Certifications */}
      <Certifications />
      {/* Contact */}
      <Contact scrollRef={sectionRef} />
    </div>
  );
}
