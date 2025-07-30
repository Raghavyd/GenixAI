import React, { useEffect, useState } from 'react'
import {useUser} from '@clerk/clerk-react'
import {dummyPublishedCreationData} from '../assets/assets'
import { Heart } from 'lucide-react'
import axios from 'axios'
import { useAuth } from '@clerk/clerk-react'
import toast from 'react-hot-toast'
import Markdown from 'react-markdown'


axios.defaults.baseURL= import.meta.env.VITE_BASE_URL
const Community = () => {
  const [creations,setCreations] = useState([])
  const [loading,setLoading] = useState(false)
  const {user} =useUser()
  const {getToken} =useAuth()

  
  const fetchCreations =async()=>{
    setLoading(true);
  try {
      
      const {data} = await axios.get('/api/user/get-published-creations',{
          headers:{Authorization:`Bearer ${await getToken()}`}
        })
         
        if(data.success){
          setCreations(data.creations)
        } else{
          toast.error(data.message)
        }
    } catch (error) {
      toast.error(error.message)
    }
  setLoading(false)
  }

  const imageLikeToggle = async(id)=>{
    try {
      
       const {data} = await axios.post('/api/user/toggle-like-creations',{id},{
          headers:{Authorization:`Bearer ${await getToken()}`}
        })

        if(data.success){
          toast.success(data.message)
          await fetchCreations() 
          }else{
            toast.error(data.message)

        }
    } catch (error) {
      toast.error(error.message)
    }
  }
  useEffect(()=>{
    if(user){
      fetchCreations()
    }
  },[])
  return !loading?(
    
    <div>
      Creations
      <div className='bg-white h-full w-full rounded-xl overflow-y-scroll'>
        {creations.map((creation,index)=>(
          <div key={index} className='relative group inline-block pl-3 pt-3 w-full sm:max-w-1/2
          lg:max-w-1/3'>
            <img src={creation.content} className='h-full w-full object-cover rounded-lg' alt="" />
            <div className='absolute bottom-0 top-0 right-0 left-3 flex gap-2 items-end justify-end
            group-hover:justify-between p-3 group-hover:bg-gradient-to-b from-transparent
            to-black/80 text-white rounded-lg'>
              <p>{creation.prompt}</p>
              <div className='flex gap-1 items-center'>
                <p>{creation.likes.length}</p>
                <Heart onClick={()=>imageLikeToggle(creation.id)} className={`min-w-5 h-5 hover:scale-110 cursor-pointer ${creation.likes.includes(user.id)?
                  'fill-red-500 text-red-600':'text-white'
                }`} />

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ):(
    <div className='flex justify-center items-center h-full'>
  <div className='w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
</div>

  )
}

export default Community
