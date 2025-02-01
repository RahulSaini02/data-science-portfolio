import React from 'react'
import ProjectCard from '../ProjectCard'

const ProjectsGrid = () => {
  const projects = [
    {
      slug: 1,
      title: "A movie recommendation system",
      description: "A movie recommendation system that gives users personalized movie suggestions based on their tastes. It’s designed to help users navigate massive movie collections, which can be overwhelming to explore manually.",
      imageSrc: "/ProjectImages/1.png",
      tag: 'Data Science',
      publishedDate: new Date().toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric"
            })
    },
    {
      slug: 2,
      title: "Sentiment analysis",
      description: "The sentiment analysis performed in this code is carried out on the tweet_eval dataset, a popular benchmark dataset for twitter tweets. The dataset includes tweets of various users categorized as either positive or negative or neutral opinions.",
      imageSrc: "/ProjectImages/2.png",
      tag: 'Deep Learning',
      publishedDate: new Date().toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric"
            })
    },
    {
      slug: 3,
      title: "Portfolio Stock Prediction",
      description: "A movie recommendation system that gives users personalized movie suggestions based on their tastes. It’s designed to help users navigate massive movie collections, which can be overwhelming to explore manually.",
      imageSrc: "/ProjectImages/3.png",
      tag: 'Data Mining',
      publishedDate: new Date().toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric"
            })
    },
  ]
  return (
   <section className='relative p-4 px-6 py-8 md:py-12 items-center  mx-auto md:max-w-7xl'>
    <div className='relative grid grid-cols-1 pkace-items-center md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {
        projects.map(project => {
          return (
              <ProjectCard key={project.slug} slug={project.slug} title={project.title} description={project.description} imageSrc={project.imageSrc} tag={project.tag} publishedDate={project.publishedDate} />
          )
        })
      }
    </div>
   </section>
  )
}

export default ProjectsGrid