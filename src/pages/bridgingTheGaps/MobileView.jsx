import React from 'react'

export default function MobileView({imageUrl, altText, scaleSize}) {
  return (
    <div className={`flex grow-0 justify-center`}>
        <div className='border-8 border-black dark:border-[#363636] rounded-2xl w-fit shadow-[#3f3f3f] shadow-2xl'>
            <img src={`${import.meta.env.BASE_URL}${imageUrl}`}
            alt={altText} className='rounded-lg object-cover dark:border-y-2 border-black dark:border-x-1' />
        </div>
        <div className="flex flex-col gap-4">
            <div className="border-1 dark:border-2 border-black dark:border-[#464646] h-24 rounded-r-xl mt-20"/>
            <div className="border-1 dark:border-2 border-black dark:border-[#424242] h-12 rounded-r-xl "/>
        </div>
    </div>
  )
}