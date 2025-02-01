import React from 'react'

const Certifications = () => {
    const certifications = [
      {
        name: "Data Analytics Essentials"
      },
      {
        name: "AWS Developer"
      },
    {
      name: "TCS On Spot Award"
    },
  ]
  
  return (
    <section className='min-h-60 md:min-h-72 bg-gray-100 overflow-hidden w-full pb-8'>
      <h3 className="text-2xl md:text-4xl font-serif font-bold uppercase tracking-widest mb-8 w-full text-center pt-8">Certifications</h3>
      <div className='flex flex-1 items-center justify-between space-x-2 p-4 mx-auto md:max-w-7xl'>
        {
          certifications.map((certification, index) => (
              <div key={certification+""+index} className='hexagon w-32 md:w-48 h-32 md:h-48 bg-indigo-500 flex justify-center items-center shadow-lg text-center text-xs md:text-base p-2 font-bold text-gray-100'>{certification.name}</div>
          ))
        }
      </div>

    </section>
  )
}

export default Certifications