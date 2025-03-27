import React from 'react'

export default function MobileView({imageUrl, altText, scaleSize}) {
  return (
    <div className={`flex grow-0 justify-center`}>
        <div className='border-8 border-black dark:border-[#777777] rounded-2xl w-fit shadow-[#3f3f3f] shadow-2xl'>
            <img src={`${import.meta.env.BASE_URL}${imageUrl}`}
            alt={altText} className='rounded-lg object-cover' />
        </div>
        <div className="flex flex-col gap-4">
            <div className="border-1 dark:border-2 border-black dark:border-[#666666] h-24 rounded-r-xl mt-20"/>
            <div className="border-1 dark:border-2 border-black dark:border-[#666666] h-12 rounded-r-xl "/>
        </div>
    </div>
  )
}