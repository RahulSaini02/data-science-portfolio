import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
     <section className="flex flex-col-reverse md:flex-row items-center justify-between p-4 px-6 py-12 md:py-24 mx-auto md:max-w-7xl">
      {/* Text Content */}
      <div className="text-center md:text-left">
        <h1 className="font-bold font-serif md:max-w-[40rem] py-4 text-3xl md:text-[3rem] leading-[120%] md:leading-[150%]">
          Empowering <em className="italic">Decisions</em>
          <br />
          with Data-Driven <br />
          Solutions
        </h1>
        <p className="mt-4 text-gray-600 md:max-w-[45rem] pb-8 text-base md:text-lg font-normal leading-[135%]">
          Data isn&apos;t just numbers; it&apos;s the story behind the numbers. I bring
          that story to life through analytics, visualization, and optimization
          strategies. From my work in TCS to my academic pursuits at UAB, my
          focus has always been on blending technical skill with strategic
          insights to maximize impact.
        </p>
      </div>

      {/* Image */}
      <div className="flex-shrink-0">
        <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 overflow-hidden rounded-full">
          <Image
            src="/Portrait.jpg"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Hero