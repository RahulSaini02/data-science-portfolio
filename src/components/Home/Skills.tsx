'use client'

import React from 'react'
import { useRef } from "react";
import {useCarouselAnimation} from '../../hooks/useAnimation'
import Image from 'next/image';


const Skills = () => {

  const carouselRef = useRef<HTMLDivElement>(null);

  // useCarouselAnimation(carouselRef, { duration: 30, ease: "none", repeat: -1 });

  const skills = [
    {
      skill: "Tableau",   
      path: "/Logos/Tableau.png"
    },
    {
      skill: "AWS",
      path: "/Logos/AWS.png"
    },
    {
      skill: "Python",
      path: "/Logos/Python.png"
    },
    {
      skill: "Oracle",
      path: "/Logos/Oracle.png"
    },
    {
      skill: "PostgreSQL",
      path: "/Logos/PostgreSQL.png"
    },
    {
      skill: "Informatica",
      path: "/Logos/Informatica.png"
    },
    {
      skill: "Apache Spark",
      path: "/Logos/Spark.png"
    },
    {
      skill: "Next JS",
      path: "/Logos/Next-JS.png"
    },
    {
      skill: "React JS",
      path: "/Logos/React-JS.png"
    },
    {
      skill: "Node JS",
      path: "/Logos/Node-JS.png"
    },
    {
      skill: "Tailwind CSS",
      path: "/Logos/Tailwind-CSS.png"
    },
    {
      skill: "Sanity",
      path: "/Logos/Sanity.png"
    },
    {
      skill: "Photoshop",
      path: "/Logos/Photoshop.png"
    },
    {
      skill: "Lightroom",
      path: "/Logos/Lightroom.png"
    },
    {
      skill: "Figma",
      path: "/Logos/Figma.png"
    },
    {
      skill: "Microsoft 365",
      path: "/Logos/Microsoft-365.png"
    },
  ]

  return (
    <section className='min-h-60 md:min-h-72 bg-gray-100 overflow-hidden w-full flex'>

      <div ref={carouselRef} className='flex items-center space-x-4 md:space-x-10 p-4 '>
        {/* Skill */}
        {
          skills.map((skill) => (
              <div key={skill.skill} className='relative h-20 w-40 bg-white font-bold flex justify-center items-center rounded-lg shadow-lg'>
                <Image 
                  src={skill.path}
                  alt={skill.skill}
                  layout='fill'
                  objectFit='contain'
                />
              </div>
          ))
        }
      </div>

    </section>
  )
}

export default Skills