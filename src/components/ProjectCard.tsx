import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const ProjectCard = ({project}) => {
  return (
    <Link href={`/projects/${project.slug}`} className='transform transition-transform hover:scale-105'>
      <div className='text-black flex flex-col space-y-4'>
        {/* Image */}
        <div className="relative min-h-56 w-full">
            <Image
            src={project.image}
            alt={project.title}
            fill
            className="rounded-lg object-cover"
          />
          <p className='p-1 px-2 bg-white/90 text-primary text-xs rounded-full absolute top-3 left-3 font-body font-thin'>{project.topic}</p>
        </div>
        {/* Content */}
      
        <div className="space-y-2">
          <h3 className='text-base leading-wide text-gray-900 uppercase font-heading'>{project.title}</h3>
          <p className="text-sm leading-relaxed text-gray-600 text-ellipsis line-clamp-4 text-justify font-body font-thin">{project.context}</p>
        </div>
        <div className='flex justify-between items-center'>
          {/* Author Details */}
          <div className='flex items-center space-x-2'>
            <Image
              src={`${project.author.image}`}
              alt='Rahul Saini'
              height={30}
              width={30}
              className='rounded-full'
            />
            <div className='text-xs'>
              <p>{project.author.name}</p>
            </div>
          </div>
          <div>
            <p className='text-xs text-gray-600'>{new Date(project.publishedAt).toLocaleDateString("en-US", {day: "numeric", month: "short", year: "numeric"})}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard