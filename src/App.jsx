import { useState } from 'react'
import './App.css'
import Curser from './assets/components/Curser'
import Navbar from './assets/components/Navbar'
import Front from './assets/components/Front'
import Reviews from './assets/components/Reviews'
import MainCourse from './assets/components/MainCourse'
import About from './assets/components/About'
import Courses from './assets/components/Courses'
import Learning from './assets/components/Learning'
import Certification from './assets/components/Certification'
import Footer from './assets/components/Footer'
import Registeration from './assets/components/Registeration'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Privacypolicy from './assets/components/Privacypolicy'
import Contact from './assets/components/Contact'
import Profile from './assets/components/Profile'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Curser />
        <Navbar />
        <Front />
        <Reviews />
        <MainCourse />
        <About />
        <Courses />
        <Learning />
        <Certification />
        <Footer />
      </>
    }
    ,
    {
      path: "/registeration",
      element: <>
        <Curser />
        <Navbar />
        <Registeration />
        <Footer />
      </>
    }
    ,
    {
      path: "/privacyPolicy",
      element: <>
        <Curser />
        <Navbar />
        <Privacypolicy/>
        <Footer />
      </>
    }
    ,
    {
      path: "/contact",
      element: <>
        <Curser />
        <Navbar />
        <Contact/>
        <Footer />
      </>
    }
    ,
    {
      path: "/profile",
      element: <>
        <Curser />
        <Navbar />
        <Profile/>
        <Footer />
      </>
    }
  ])
  return (

    <RouterProvider router={router} />
  )
}

export default App
