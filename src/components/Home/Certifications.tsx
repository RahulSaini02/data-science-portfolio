import Link from 'next/link'
import React from 'react'

const Certifications = ({data}) => {
  return (
    <section className='min-h-60 md:min-h-72 bg-gray-100 overflow-hidden w-full pb-8'>
      <h3 className="text-2xl md:text-4xl font-heading font-bold uppercase tracking-widest mb-8 w-full text-center pt-8">Certifications</h3>
      <div className='flex flex-1 items-center justify-around p-4 mx-auto md:max-w-7xl'>
        {
          data.map((certification) => (
              <Link href={`${certification.certificate}`} download={`${certification.certificate}`} target='_blank' key={certification.slug} className='hexagon w-32 md:w-48 h-32 md:h-48 bg-secondary flex justify-center items-center shadow-lg text-center text-xs md:text-base p-2 font-body font-bold text-gray-100 cursor-pointer'>{certification.title}</Link>
          ))
        }
      </div>
    

    </section>
  )
}

export default Certifications