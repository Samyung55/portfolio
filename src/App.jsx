import React, {useContext, useEffect} from 'react'
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
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


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

  // Define animation variants for Hero component
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  // Define animation variants for Services component
  const servicesVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };

  const controls = useAnimation();
    const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 4, x: 0 });
    } else {
      controls.start({ opacity: 0, x: -100 });
    }
  }, [controls, inView]);

  const navbarControls = useAnimation();
  const [navbarRef, navbarInView] = useInView();

useEffect(() => {
  if (navbarInView) {
    navbarControls.start({ y: 0, opacity: 1, transition: { duration: 0.5 } });
  } else {
    navbarControls.start({ y: -50, opacity: 0, transition: { duration: 0.5 } });
  }
}, [navbarControls, navbarInView]);

const heroControls = useAnimation();
const [heroRef, heroInView] = useInView();

useEffect(() => {
  if (heroInView) {
    heroControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    });
  } else {
    heroControls.start({
      opacity: 0,
      y: 50,
      transition: { duration: 1 },
    });
  }
}, [heroControls, heroInView]);

const workControls = useAnimation();
const [workRef, workInView] = useInView();

useEffect(() => {
  if (workInView) {
    workControls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: i * 0.2 }, // Staggered delay
    }));
  } else {
    workControls.start({
      opacity: 0,
      y: 50,
      transition: { duration: 1 },
    });
  }
}, [workControls, workInView]);


  return (
      <>
        <motion.div
        ref={navbarRef}
        initial={{ y: -50, opacity: 0 }}
        animate={navbarControls}
        className="navbar-container"
        >
          <Navbar />
        </motion.div>

      
      `<motion.div
  ref={heroRef}
  initial={{ opacity: 0, y: 50 }}
  animate={heroControls}
  className="hero-container"
>
  <Hero />
</motion.div>
`

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        transition={{ duration: 2 }}
      >
        <Services />
      </motion.div>
        <Work />
        <Hire />
        <CarouselContainer />
        <TestimonialContainer />
        <Newsletter />
        <Footer />
      </>
  );
}


export default App
