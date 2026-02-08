import React from 'react'

export default function Heading({ pageNumber, title }) {
  return (
    <div className='font-barlow-condensed flex gap-6 text-[28px] uppercase max-xl:text-[20px] max-sm:text-[16px] max-sm:justify-center'>
        <span className='font-bold text-white/25 tracking-[4.72px]'>{pageNumber}</span>
        <h2 className='tracking-[4px]'>{title}</h2>
    </div>
  )
}
