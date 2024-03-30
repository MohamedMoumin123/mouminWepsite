import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./Home"
import About from './pages/About us'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Home/>
   <About/>
   <Skills/>
   <Projects/>
   <Contacts/>
 
   
  
   
 

  </React.StrictMode>,
)

export default main
