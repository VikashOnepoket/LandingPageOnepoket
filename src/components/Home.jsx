import React from 'react'
import Navbar from './Navbar/Navbar'
import HeroSection from './Hero/HeroSection'
import Cards from './Cards/Cards'
import Fold2card from './Cards/Fold2card'
import FaqSection from './Faq/FaqSection'
import CustomerScan from './CustomerScan/CustomerScan'
import GifAnimation from './animation/GifAnimation'
import Footer from './Footer/Footer'

const Home = () => {
  return (

    <>
      <Navbar />
      <HeroSection />
      <Fold2card />
      <GifAnimation />
      <FaqSection />
      <CustomerScan />
      <Footer />
    </>


  )
}

export default Home
