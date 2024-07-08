import React from 'react'
import Navbar from './Navbar/Navbar'
import HeroSection from './Hero/HeroSection'
import Cards from './Cards/Cards'
import Fold2card from './Cards/Fold2card'
import FaqSection from './Faq/FaqSection'
import CustomerScan from './CustomerScan/CustomerScan'
import GifAnimation from './animation/GifAnimation'
import Footer from './Footer/Footer'
import line from '../assets/line.png'
import HeroMain from './HeroMain'

const Home = () => {
  return (

    <>
      <Navbar />
      <HeroMain />
      <Fold2card />
      <GifAnimation />
      {/* <div>
        <img src={line} />
      </div> */}
      <FaqSection />
      {/* <div>
        <img src={line} />
      </div> */}
      <CustomerScan />
      <Footer />
    </>


  )
}

export default Home
