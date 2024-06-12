import { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import Banner from './Components/Banner'
import About from './Components/About'
import Services from './Components/Services'
import Expertise from './Components/Expertise'
import Footer from './Components/Footer'
import AboutMore from './Components/AboutMore'

import Contact from './Components/ContactMe'
import Educational from './Components/Education'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
   
     <Header />
     <Banner />
     <About />
     <Services />
     <Expertise />
     <AboutMore />
     <Educational />
     <Contact />
     <Footer /> 

   
    </>
  )
}

export default App
