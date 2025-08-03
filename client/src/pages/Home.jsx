import React from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial.jsx'
import NewsLetter from '../components/NewsLetter.jsx'
import Navbar from '../components/Navbar.jsx'

const Home = () => {
  return (
    <>
   
     <Hero/>
     <FeaturedSection/> 
     <Banner/>
    <Testimonial/>
    <NewsLetter/>
    </>
  )
}

export default Home
