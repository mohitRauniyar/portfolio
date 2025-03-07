import React from 'react'
import SideNav from '../../components/SideNav'
import ProfileCard from './ProfileCard'

export default function About() {
  return (
    <>
        <SideNav/>
            
        <div className="md:pl-20 flex flex-col w-full">
            <ProfileCard/>
            
        </div>
    </>
  )
}
