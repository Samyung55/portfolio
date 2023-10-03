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
import Testimonial from './components/Testimonial/Testimonial'

const App = () => {
  const CarouselContainer = () => {
    const { project } = useContext(ProjectContext);
  
    return (
      <>
      <Carousel projects={project} />
      </>
    );
  }

  const TestimonialContainer = () => {
    const { clients } = useContext(ProjectContext);
  
    return (
      <>
      <Testimonial clients={clients} />
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
        <TestimonialContainer />
      </>
  );
}


export default App
