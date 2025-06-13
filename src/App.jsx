import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Project from './Components/Project'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import { ToastContainer } from 'react-toastify';
import Footer from './Components/Footer'
import { BrowserRouter } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
      <Header/>
      <About/>
      <Project/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App