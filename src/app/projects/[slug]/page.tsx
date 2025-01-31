"use client";

import React from 'react'
import { useRef } from "react";

import Nav from "@/components/Nav";
import Contact from "@/components/Contact";
import ProjectBlog from '@/components/Projects/ProjectBlog'

export default function Project(){
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className='bg-white min-h-screen text-black'>
      <Nav scrollToSection={scrollToSection}/>
      <ProjectBlog />
      <Contact scrollRef={sectionRef} />
    </section>
  )
}