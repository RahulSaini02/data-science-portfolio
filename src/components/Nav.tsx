"use client";

import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";

const Nav = ({data}) => {
  const path = usePathname();

  return (
    <nav className='border-b border-gray-300 min-h-14 z-10'>
      <div className='flex justify-between items-center p-4 px-6 md:max-w-7xl mx-auto'>
        <div className='text-lg md:text-2xl font-bold'>
          <Link href="/">
            <h3 className='font-heading text-primary tracking-wider'>Rahul Saini</h3>
          </Link>
        </div>
        <div className='text-md md:text-lg text-primary font-body space-x-6 md:space-x-12 tracking-widest uppercase'>
          <Link href={path == "/projects" ? '/' : '/projects' }>
            <div className='inline-block transform transition-transform hover:scale-110 font-thin hover:font-medium'>{path == "/projects" ? 'Home' : 'Projects' }</div>
          </Link>
          <Link className='inline-block transform transition-transform hover:scale-110 font-thin hover:font-medium' href="#contact">Contact</Link>
          <Link href={`${data.resume}`} target='_blank' className={` ${path == "/projects" ? 'text-secondary/50' : 'text-secondary'} inline-block transform transition-transform hover:scale-110 font-bold`}>Resume</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav