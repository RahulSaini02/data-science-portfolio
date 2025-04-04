import Link from 'next/link'
import React from 'react'

// Icons
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaFileArrowDown } from "react-icons/fa6";

const Contact = ({data}) => {
  return (
    <section id="contact" className="pt-8 text-primary">
       <div className="flex flex-col items-center md:flex-row justify-between p-4 px-6 mx-auto md:max-w-7xl">
        <div>
          <h1 className="font-normal font-heading md:max-w-[50rem] py-4 text-3xl lg:text-6xl leading-[120%] md:leading-[150%]">
            Get in <em className="italic">Touch</em>
            <br />
            with me.
          </h1>
        </div>
        <div className=' bg-gray-200 h-[1px] md:h-60 w-full md:w-[1px]' />
        <div>
          <p className="mt-4 md:mt-0 text-primary/80 md:max-w-[35rem]  text-base md:text-lg lg:text-xl font-body leading-[135%]">
          Whether you have questions, inquires or just want to say hello, I&apos;d love to hear from you. Reach out using the below details.
          </p>
        </div>
      </div>

      <footer className='space-y-6 md:space-y-0  flex flex-col md:flex-row items-center md:justify-evenly border-t border-primary/30 w-full mt-4 py-4 font-body text-primary/80'>
          <div className='p-4 border border-primary/50 cursor-pointer group hover:border-secondary rounded-md'>
            <Link href={`mailto:${data.email}`} className='flex items-center text-primary/80 group-hover:text-secondary'><FaEnvelope className='mr-2' />{data.email}</Link>
          </div>

          <div className='bg-gray-200 h-[1px] md:h-20 w-full md:w-[1px]' />

          <div className='p-4 border border-primary/50 hover:border-secondary group cursor-pointer rounded-md'> 
            <Link href={`tel:${data.mobile}`} className='flex items-center text-primary/80 group-hover:text-secondary'><FaPhone className='mr-2' />{data.mobile}</Link>
          </div>

          <div className=' bg-gray-200 h-[1px] md:h-20 w-full md:w-[1px]' />

          <div className='p-4 border border-primary/50 hover:border-secondary cursor-pointer bg-secondary hover:bg-white text-white hover:text-secondary rounded-md transition-all ease-in-out duration-150'>
            <Link href={`${data.resume}`} download={`${data.resume}`} target='_blank' className='flex items-center'><FaFileArrowDown className='mr-2' />Download Resume</Link>
          </div>

          <div className=' bg-gray-200 h-[1px] md:h-20 w-full md:w-[1px]' />

          <div className='flex space-x-4'>
            {
              data.socials.map(social => (
                  <Link key={social._id} href={`${social.link}`} target='_blank' className='group p-2 border border-primary/50 hover:border-secondary rounded-md transition-all ease-in-out duration-150'>
                    {
                      social.title == "LinkedIn" ?  <FaLinkedin className='h-8 w-8 text-primary/80 group-hover:text-secondary' /> : <FaGithub className='h-8 w-8 text-primary/80 group-hover:text-secondary' />
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