import React, {useContext} from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Work from './components/Work/Work'
import Hire from './components/Hire/Hire'
import Carousel from './components/Carousel/Carousel'
import phone from "./assets/phone.png"
import ProjectProvider from './context/ProjectContext.jsx'
import ProjectContext from './context/ProjectContext.jsx'

const App = () => {
  const CarouselContainer = () => {
    const { project } = useContext(ProjectContext);
  
    console.log("Project data:", project);
  
    return (
      <><Carousel projects={project} />
      </>
    );
  }
  

  return (
    <>
        <Navbar />
        <Hero />
        <Services />
        <Work />
        <Hire />
          <CarouselContainer />
    </>
  );
}


export default App
