import React from 'react'
import SideNav from '../../components/SideNav'
import Nav from '../../components/Nav'
import Content from './Content'
import Hero from './Hero'

export default function LandingPage() {
  return (
    <>
      <Nav/>
      <SideNav/>
    
      <div className="md:pl-20 flex flex-col w-full">
        <Hero/>
        <div className="flex justify-center w-full">
        <Content/>
        </div>
        
      </div>
        
    </>
  )
}