import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import Testimonials from './Testimonials'
import Pricing from './Pricing'
import Faqs from './Faqs'
import Subscription from './Subscription'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Testimonials />
        <Pricing />
        <Faqs />
        <Subscription />
        <Footer />
    </>
  )
}

export default Home
