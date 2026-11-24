import React from 'react'
import { heroRightItems } from './data'

export default function SiteStatistics() {
  return (
    <div className='w-full bg-(--brand-primary)'>
      <div className="grid w-full grid-cols-2 lg:grid-cols-4 py-8 sm:py-12 width-wrapper gap-y-8 sm:gap-y-12 ">
        {heroRightItems.map((item, index) => (
          <div key={index} className='flex items-center justify-center flex-col gap-y-1 lg:gap-y-0'>
            <h3 className='font-bold text-2xl text-white sm:text-4xl'>{item.label}</h3>
            <p className='text-neutral-200 text-sm lg:text-md'>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
