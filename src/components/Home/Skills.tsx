'use client'

import React from 'react'
import { useRef } from "react";
import {useCarouselAnimation} from '../../hooks/useAnimation'
import Image from 'next/image';


const Skills = ({data}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  useCarouselAnimation(carouselRef, { duration: 30, ease: "none", repeat: -1 });

  return (
    <section className='min-h-60 md:min-h-72 bg-gray-100 overflow-hidden w-full flex'>

      <div ref={carouselRef} className='flex items-center space-x-4 md:space-x-10 p-4 '>
        {/* Skill */}
        {
          data.map(skill => (
              <div key={skill.slug} className='relative h-20 w-40 bg-white font-bold flex justify-center items-center rounded-lg shadow-lg'>
                <Image 
                  src={skill.image}
                  alt={skill.skill}
                  fill
                  sizes="(max-width: 600px) 100vw, 50vw"
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