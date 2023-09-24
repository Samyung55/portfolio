import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

const App = () => {
  return (
  <>
  <Navbar />
  <Hero />
  </>
  )
}

export default App
