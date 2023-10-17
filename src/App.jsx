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

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1); // Get the target element's id
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });
  

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

const hireControls = useAnimation();
const [hireRef, hireInView] = useInView();

useEffect(() => {
  if (hireInView) {
    hireControls.start({
      scale: 1.1, // Scale up the button
      backgroundColor: '#ff5722', // Change the button color
      transition: { duration: 0.5, yoyo: Infinity }, // Bounce animation
    });
  } else {
    hireControls.start({
      scale: 1,
      backgroundColor: '#007bff', // Reset the button color
    });
  }
}, [hireControls, hireInView]);

const carouselControls = useAnimation();
const [carouselRef, carouselInView] = useInView();

useEffect(() => {
  if (carouselInView) {
    carouselControls.start({
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeOut' },
    });
  } else {
    carouselControls.start({
      opacity: 0,
      x: -100, // Slide content to the left when out of view
      transition: { duration: 1, ease: 'easeOut' },
    });
  }
}, [carouselControls, carouselInView]);

const testimonialControls = useAnimation();
const [testimonialRef, testimonialInView] = useInView();

useEffect(() => {
  if (testimonialInView) {
    testimonialControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    });
  } else {
    testimonialControls.start({
      opacity: 0,
      y: 50,
      transition: { duration: 1, ease: 'easeOut' },
    });
  }
}, [testimonialControls, testimonialInView]);

const newsletterControls = useAnimation();
const [newsletterRef, newsletterInView] = useInView();

useEffect(() => {
  if (newsletterInView) {
    newsletterControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    });
  } else {
    newsletterControls.start({
      opacity: 0,
      y: 50,
      transition: { duration: 1, ease: 'easeOut' },
    });
  }
}, [newsletterControls, newsletterInView]);

const footerControls = useAnimation();
const [footerRef, footerInView] = useInView();

useEffect(() => {
  if (footerInView) {
    footerControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    });
  } else {
    footerControls.start({
      opacity: 0,
      y: 50,
      transition: { duration: 1, ease: 'easeOut' },
    });
  }
}, [footerControls, footerInView]);


  return (
      <div className='app'>
        <motion.div
        ref={navbarRef}
        initial={{ y: -30, opacity: 0 }}
        animate={navbarControls}
        className="navbar-container"
        >
          <Navbar />
        </motion.div>

        <div className="container">
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
      <motion.div
  ref={workRef}
  initial={{ opacity: 0, y: 50 }}
  animate={workControls}
  className="work-container"
>
  <Work />
</motion.div>
<motion.div
  ref={hireRef}
  initial={{ scale: 1, backgroundColor: '#007bff' }}
  animate={hireControls}
  className="hire-container"
>
        <Hire />
    </motion.div>
    <motion.div
  ref={carouselRef}
  initial={{ opacity: 0, x: -100 }}
  animate={carouselControls}
  className="carousel-container"
>
  <CarouselContainer />
</motion.div>
  <TestimonialContainer />
<motion.div
  ref={newsletterRef}
  initial={{ opacity: 0, y: 50 }}
  animate={newsletterControls}
  className="newsletter-container"
>
  <Newsletter />
</motion.div>
<motion.div
  ref={footerRef}
  initial={{ opacity: 0, y: 50 }}
  animate={footerControls}
  className="footer-container"
>
  <Footer />
</motion.div>
</div>
      </div>
  );
}


export default App
