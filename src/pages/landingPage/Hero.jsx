import React from 'react'
import Tooltip from '../../components/Tooltip'

export default function Hero() {
  return (
    <div className='w-full min-h-screen flex flex-col align-middle justify-center gap-10 text-[#333333] dark:text-[#eef4f2b7] p-12' id='hero'>
        <h1 className='text-center text-xl sm:text-2xl'>Software Developer</h1>
        <h1 className='text-center text-4xl md:text-6xl lg:text-9xl bg-gradient-to-r from-[#6A988D] to-[#152822] text-transparent bg-clip-text font-stretch-semi-expanded'>Mohit Rauniyar</h1>
        <div className="sm:absolute bottom-4 right-5 z-40 ">
            <Tooltip/>
        </div>
    </div>
  )
}
// text-[#8CB9AC]