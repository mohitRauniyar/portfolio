import React from 'react'
import SkillGrid from './SkillGrid'

export default function Skills() {
  return (
    <div className="md:flex hidden flex-col" id='skills'>
          <div className="border-1 border-[#cfcfcf] dark:border-[#101110] ">
            <h2 className="text-center align-middle dark:text-white p-28 text-lg md:text-2xl overline">
              SKILLS
            </h2>
          </div>
          <div className=" border-1 border-[#cfcfcf] dark:border-[#101110] scale-100 bg-white dark:bg-black">
            <SkillGrid/>
          </div>
        </div>
  )
}
