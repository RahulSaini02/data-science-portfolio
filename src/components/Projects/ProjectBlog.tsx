"use client";

import React from 'react'
import { useEffect, useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from 'next-sanity';

import { RichTextComponents } from '../RichTextComponents';

import { FaArrowRight, FaArrowDown, FaGithub, FaLink } from "react-icons/fa6";


const ProjectBlog = ({project}) => {
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
    // Extract H2 headings from CRM content
    const h2Headings = project.body.filter(block => block.style === "h2").map(block => ({
      id: block._key,
      text: block.children[0]?.text || "Untitled"
    }));
    setHeadings(h2Headings);
  }, [project]);

    return (
      <section className='pb-28 p-4 px-6 md:max-w-7xl mx-auto space-y-2 bg-white min-h-screen text-primary'>
        {/* Project Header */}
        <div className='space-y-4 my-4 lg:my-12'>
          <h3 className='text-xl md:text-3xl lg:text-5xl font-heading font-bold tracking-wide text-left'>{project.title}</h3>
          <p className='text-primary/80 text-sm md:text-lg lg:text-xl py-2 font-body font-thin text-justify'>{project.context}</p>
        </div>
        {/* Project Image */}
        <div className='relative min-h-72 md:min-h-64 lg:min-h-[30rem] w-full'>
          <Image className='object-contain'
            src={`${project.projectImage}`}
            fill
            sizes="(max-width: 600px) 100vw, 50vw"
            alt={`${project.title}`}
            placeholder = 'blur'
            blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMN7ldDwAENwHnfg9UxAAAAABJRU5ErkJggg=='
            priority
          />
        </div>
        {/* Author, Publish & GitHub */}
        <div className='flex items-center justify-between w-full py-2 lg:py-8 text-primary font-body'>
            <div className='flex flex-col space-y-2 md:flex-row md:space-x-8 w-1/2'>
              <div className='flex items-center space-x-2'>
                <Image
                  src={`${project.author.image}`}
                  alt={`${project.author.name}`}
                  height={40}
                  width={40}
                  className='rounded-full'
                />
                <div className=''>
                  <p>{project.author.name}</p>
                </div>
              </div>
            <div className='text-sm md:text-base'>
              <p>Published On</p>
              <p className='font-thin'>{new Date(project.publishedAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })}</p>
            </div>
            </div>
            
            <div className='flex flex-col md:flex-row space-y-2 space-x-0 md:space-x-8 md:space-y-0 md:w-1/2 justify-end'>
              {project.links.map(link => (
                <Link 
                  key={link._key} 
                  href={link.url} 
                  target='_blank' 
                  className='group flex space-x-2 border border-primary/60 hover:border-secondary hover:text-primary/10 hover:bg-secondary hover:shadow-lg ease-in-out transition-all duration-125 rounded-md cursor-pointer p-2 items-center justify-center'
                >
                  {
                    link.label == "GitHub" ? 
                      <FaGithub className='text-primary/60 group-hover:text-primary/10' /> 
                    : 
                      <FaLink className='text-primary/60 group-hover:text-primary/10' />
                  }
                  <p className='text-primary text-center group-hover:text-primary/10'>{link.label}</p>
                </Link>
              ))}
            </div>
        </div>
        
        <article className='flex flex-col md:flex-row space-between gap-10 lg:gap-20'>
          {/* Table of Contents */}
          <div className='space-y-4 mt-8 md:w-1/3'>
            {
              headings.map(content => (
                  <Link key={content.id} href={`#${content.id}`}  className='flex items-center justify-between border-spacing-4 pb-3 border-b border-primary/60 cursor-pointer'>
                    <h3 className='font-bold text-sm font-heading'>{content.text}</h3>
                    <div className='flex'>
                      <FaArrowRight className='hidden md:inline' />
                      <FaArrowDown className='inline md:hidden' />
                    </div>
                  </Link>
              ))
            }
          </div>

          {/* Content */}
          <div className='space-y-4 md:w-2/3 text-justify'>
          <PortableText
            value={project.body}
            components={RichTextComponents}
          />
          </div>
        </article>
      </section>        
    )
}

export default ProjectBlog