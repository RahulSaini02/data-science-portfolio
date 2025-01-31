import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

type ProjectCardProps = {
  slug: number;
  title: string;
  description: string;
  imageSrc: string;
  tag: string;
  publishedDate: string;
};

const ProjectCard = ({slug, imageSrc, title, description, tag, publishedDate}: ProjectCardProps) => {
  return (
    <Link href={`/projects/${slug}`} className='transform transition-transform hover:scale-105'>
      <div className='text-black flex flex-col space-y-4'>
        {/* Image */}
        <div className="relative min-h-56 w-full">
            <Image
            src={imageSrc}
            alt={title}
            fill
            className="rounded-lg object-cover"
          />
          <p className='p-1 px-2 bg-white/90 text-black text-xs rounded-full absolute top-3 left-3'>{tag}</p>
        </div>
        {/* Content */}
      
        <div className="space-y-2">
          <h3 className='text-base leading-wide text-gray-900 uppercase'>{title}</h3>
          <p className="text-sm leading-relaxed text-gray-600 text-ellipsis text-justify">{description}</p>
        </div>
        <div className='flex justify-between items-center'>
          {/* Author Details */}
          <div className='flex items-center space-x-2'>
            <Image
              src='/Portrait.jpg'
              alt='Rahul Saini'
              height={30}
              width={30}
              className='rounded-full'
            />
            <div className='text-xs'>
              <p>Rahul Saini</p>
            </div>
          </div>
          <div>
            <p className='text-xs text-gray-600'>{publishedDate}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard