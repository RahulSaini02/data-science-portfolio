import React from 'react'

const Certifications = () => {
    const certifications = [
    {
      name: "AWS Cloud Practitioner"
    },
    {
      name: "AWS Solution Architect"
    },
    {
      name: "TCS On Spot Award"
    },
  ]
  
  return (
    <section className='min-h-60 md:min-h-72 bg-gray-100 overflow-hidden w-full flex'>

      <div className='flex flex-1 items-center justify-between space-x-2 p-4 mx-auto md:max-w-7xl'>
        {
          certifications.map((certification, index) => (
              <div key={certification+""+index} className='hexagon w-32 md:w-48 h-32 md:h-48 bg-indigo-500 flex justify-center items-center shadow-lg text-center text-base font-bold text-gray-100'>{certification.name}</div>
          ))
        }
      </div>

    </section>
  )
}

export default Certifications