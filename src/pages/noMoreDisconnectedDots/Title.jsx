import React from 'react'

export default function Title({title, domain}) {
  return (
    <div className='mt-4 mb-8'>
      <p className='text-md md:text-xl font-semibold text-[#687261]'>{domain}</p>
      <br />
      <h1 className='text-2xl lg:text-4xl font-semibold dark:text-white w-fit'>{title}</h1>
    </div>
  )
}
