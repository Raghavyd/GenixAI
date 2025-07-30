import React from 'react'
import { PricingTable } from '@clerk/clerk-react'
const Plan = () => {
  return (
    <div className='max-w-2xl  mx-auto z-20 my-30'>
      <div className='text-center'>
        <h1 className='text-slate-700 text-[42px] font-semibold '>Choose Your Plans</h1>
        <p className='text-gray-500 max-w-lg mx-auto'>Start for free and scale up as you grow.
            Find the perfect plans for your content creation need 
        </p>
      </div>
      <div className='mt-14 max-sm:mx-8'>
            <PricingTable/>
      </div>
    </div>
  )
}

export default Plan
