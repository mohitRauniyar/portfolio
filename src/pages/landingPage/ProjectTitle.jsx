import React from 'react'

export default function ProjectTitle({title, domain}) {
  return (
    <div className='mt-4 mb-8'>
      <p className='text-md md:text-xl text-[#92a187]'>{domain}</p>
      <br />
      <h3 className='text-2xl lg:text-4xl text-bold dark:text-white'>{title}</h3>
    </div>
  )
}
