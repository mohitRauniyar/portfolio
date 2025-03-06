import React from 'react'
import Projects from './Projects'
import Services from './Services'
import Skills from './Skills'
import Footer from '../../components/Footer'

export default function Content() {
  return (
    <div className='md:w-7xl flex flex-col scroll-smooth'>
        <Projects />
        <Services />
        <Skills />
        <Footer/>
    </div>
  )
}
