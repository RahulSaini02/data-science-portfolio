import React from 'react'
import ProjectCard from '../ProjectCard'

const ProjectsGrid = ({projects}) => {
  return (
   <section className='relative p-4 px-6 py-8 md:py-12 items-center  mx-auto md:max-w-7xl'>
    <div className='relative grid grid-cols-1 pkace-items-center md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {
        projects.map(project => {
          return (
              <ProjectCard key={project.slug} project={project} />
          )
        })
      }
    </div>
   </section>
  )
}

export default ProjectsGrid