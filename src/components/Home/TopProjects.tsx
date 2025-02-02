import React from 'react'
import ProjectCard from '../ProjectCard'

const TopProjects = ({data}) => {
  return (
    <div className='relative p-4 px-6 py-12 md:py-24 items-center  mx-auto md:max-w-7xl'>
      <h3 className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-widest mb-8 w-full text-center ">Featured Projects</h3>
      <div className='relative grid grid-cols-1 pkace-items-center md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
          data.map(project => {
            return (
             <ProjectCard key={project.slug} project={project} />
            )
          })
        }
      </div>
    </div>
  )
}

export default TopProjects