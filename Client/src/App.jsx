import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import  Home  from './Pages/Home'
import  Layout  from './Pages/Layout'
import Community from './Pages/Community'
import BlogTitles from './Pages/BlogTitles'
import GenerateImages from './Pages/GenerateImages'
import RemoveBackground from './Pages/RemoveBackground'
import WriteArticles from './Pages/WriteArticle'
import ReviewResume from './Pages/ReviewResume'
import RemoveObjects from './Pages/RemoveObject'
import { useEffect } from 'react'
import { useAuth } from '@clerk/clerk-react'
import {Toaster} from 'react-hot-toast'
function App() {

  return (
    <div> 
      <Toaster/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/ai' element={<Layout/>}>
          <Route index element={<Dashboard/>} />
          <Route path='community' element={<Community/>} />
          <Route path='blog-titles' element={<BlogTitles/>} />
          <Route path='generate-images' element={<GenerateImages/>} />
          <Route path='remove-background' element={<RemoveBackground/>} />
          <Route path='write-article' element={<WriteArticles/>} />
          <Route path='review-resume' element={<ReviewResume/>} />
          <Route path='remove-object' element={<RemoveObjects/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
