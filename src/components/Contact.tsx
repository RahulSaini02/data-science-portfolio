import Link from 'next/link'
import React from 'react'

// Icons
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaFileArrowDown } from "react-icons/fa6";

const Contact = ({data}) => {
  return (
    <section id="contact" className="py-8">
       <div className="flex flex-col items-center md:flex-row justify-between p-4 px-6  mx-auto md:max-w-7xl">
        <div>
          <h1 className="font-normal font-heading md:max-w-[50rem] py-4 text-4xl lg:text-6xl leading-[120%] md:leading-[150%]">
            Get in <em className="italic">Touch</em>
            <br />
            with me.
          </h1>
        </div>
        <div className=' bg-gray-200 h-[1px] md:h-60 w-full md:w-[1px]' />
        <div>
          <p className="mt-4 pb-8 text-gray-600 md:max-w-[35rem]  text-base md:text-lg lg:text-xl font-body font-thin leading-[135%]">
          Whether you have questions, inquires or just want to say hello, I&apos;d love to hear from you. Reach out using the below details.
          </p>
        </div>
      </div>

      <footer className='space-y-6 flex flex-col md:flex-row items-center md:justify-evenly border-t border-gray-300 w-full mt-4 font-body'>
          <div className='mt-4 p-4 border border-gray-500 cursor-pointer group hover:border-indigo-600 rounded-md'>
            <Link href={`mailto:${data.email}`} className='flex items-center text-gray-600 group-hover:text-indigo-600'><FaEnvelope className='mr-2' />{data.email}</Link>
          </div>

          <div className='bg-gray-200 h-[1px] md:h-20 w-full md:w-[1px]' />

          <div className='p-4 border border-gray-500 hover:border-indigo-600 group cursor-pointer rounded-md'> 
            <Link href={`tel:${data.mobile}`} className='flex items-center text-gray-600 group-hover:text-indigo-600'><FaPhone className='mr-2' />{data.mobile}</Link>
          </div>

          <div className=' bg-gray-200 h-[1px] md:h-20 w-full md:w-[1px]' />

          <div className='p-4 border border-gray-500 hover:border-indigo-600 cursor-pointer bg-indigo-600 hover:bg-white text-white hover:text-indigo-600 rounded-md transition-all ease-in-out duration-150 font-bold'>
            <Link href={`${data.resume}`} download={`${data.resume}`} target='_blank' className='flex items-center'><FaFileArrowDown className='mr-2' />Download Resume</Link>
          </div>

          <div className=' bg-gray-200 h-[1px] md:h-20 w-full md:w-[1px]' />

          <div className='flex space-x-4'>
            {
              data.socials.map(social => (
                  <Link key={social._id} href={`${social.link}`} target='_blank' className='group p-2 border border-gray-200 hover:border-indigo-600 rounded-md transition-all ease-in-out duration-150'>
                    {
                      social.title == "LinkedIn" ?  <FaLinkedin className='h-8 w-8 text-gray-600 group-hover:text-indigo-600' /> : <FaGithub className='h-8 w-8 text-gray-600 group-hover:text-indigo-600' />
                    }
                  </Link>
              ))
            }
          </div>
      </footer>
    </section>
  )
}

export default Contact