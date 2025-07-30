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
     
<div className='fixed z-50 w-full backdrop-blur-2xl flex items-center justify-between py-3 px-4 sm:px-6 lg:px-20 xl:px-32'>
  <img
    src={assets.holo}
    alt="logo"
    className="w-32 sm:w-40 md:w-60 h-auto cursor-pointer"
    onClick={() => navigate('/')}
  />
  {user ? (
    <UserButton />
  ) : (
    <button
      onClick={openSignIn}
      className="flex items-center gap-2 rounded-full text-xs sm:text-sm bg-primary text-white px-4 py-2 sm:px-6 sm:py-2.5"
    >
      <span>Get Started</span>
      <ArrowRight className="w-4 h-4" />
    </button>
  )}
</div>

  )
}

export default Navbar
