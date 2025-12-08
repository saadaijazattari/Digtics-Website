import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Service_details_page from './pages/Service_details_page'
import Service_Page from './pages/Service_Page'
import Blogs_Page from './pages/Blogs_Page'
import Not_Found_Page from './pages/Not_Found_Page'
import FAQ_Page from './pages/FAQ_Page'
import Pages_page from './pages/Pages_page'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service-details' element={<Service_details_page/>}/>
        <Route path='/service' element={<Service_Page/>}/>
        <Route path='/blogs' element={<Blogs_Page/>}/>
        <Route path='*' element={<Not_Found_Page/>}/>
        <Route path='/faq' element={<FAQ_Page/>}/>
        <Route path='/pages' element={<Pages_page/>}/>
      </Routes>
    </div>
  )
}

export default App
