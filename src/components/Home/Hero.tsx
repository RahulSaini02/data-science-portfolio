import Image from 'next/image'
import React from 'react'
import { PortableText } from '@portabletext/react';

const Hero = ({data}) => {
  return (
     <section className="flex flex-col-reverse md:flex-row items-center justify-between p-4 px-6 py-12 md:py-24 mx-auto md:max-w-7xl">
      {/* Text Content */}
      <div className="text-center md:text-left">
        <PortableText
            value={data.intro}
            components={{
            block: {
              normal: ({ children }) => <h1 className="font-bold font-serif md:max-w-[40rem] py-4 text-3xl md:text-[3rem] leading-[120%] md:leading-[150%]">{children}</h1>,
            },
          }}
        />

        <PortableText
            value={data.about}
            components={{
            block: {
              normal: ({ children }) => <p className="mt-4 text-gray-600 md:max-w-[45rem] pb-8 text-base md:text-lg font-normal leading-[135%]">{children}</p>,
            },
          }}
        />
      </div>

      {/* Image */}
      <div className="flex-shrink-0">
        <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 overflow-hidden rounded-full">
          <Image
            src={`${data.image}`}
            alt={`${data.name}`}
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