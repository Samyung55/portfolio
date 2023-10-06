import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Work from './components/Work/Work'
import Hire from './components/Hire/Hire'

const App = () => {
  return (
  <>
  <Navbar />
  <Hero />
  <Services />
  <Work />
  <Hire/>
  </>
  )
}

export default App
