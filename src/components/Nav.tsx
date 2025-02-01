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
            <h3 className={`font-serif`}>Rahul Saini</h3>
          </Link>
        </div>
        <div className='text-md md:text-lg font-medium space-x-6 md:space-x-12'>
          <Link href={path == "/projects" ? '/' : '/projects' }>
            <div className='inline-block transform transition-transform hover:scale-110'>{path == "/projects" ? 'Home' : 'Projects' }</div>
          </Link>
          <Link className='inline-block transform transition-transform hover:scale-110' href="#contact">Contact</Link>
          <Link href={`${data.resume}`} target='_blank' className={` ${path == "/projects" ? 'text-indigo-400' : 'text-indigo-600'} font-bold inline-block transform transition-transform hover:scale-110`}>Resume</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav