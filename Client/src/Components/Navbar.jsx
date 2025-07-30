import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useClerk,useUser,UserButton } from '@clerk/clerk-react'
const Navbar = () => {
    const navigate = useNavigate()
    const {user} = useUser()
    const {openSignIn} =useClerk()
  return (
     
    <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 
     px-4 sm:px-20 xl:px-32'>
<img
  src={assets.holo}
  alt="logo"
  className="w-[300px] h-auto cursor-pointer"
  onClick={() => navigate('/')}
/>
{
  user ? (
    <UserButton />
  ) : (
    <button
      onClick={openSignIn}
      className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-6 py-2.5 md:px-10 md:py-2.5'
      // Ensure it's always block-level for visibility, and adjust padding for smaller screens
    >
      Get Started <ArrowRight className='w-4 h-4'/>
    </button>
  )
}

     
    </div>
  )
}

export default Navbar
