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
import NavTop from './Navbar/NavTop'
import ScanMe from './scanMe/ScanMe'
import Direct from './solving/Direct'

import AutoPlay from './slider/Slider'



const Home = () => {
  return (

    <>
      <div className='h-screen overflow-y-auto'>
        <NavTop />

        <Navbar />
        <HeroMain />
        <Fold2card />
        <Direct />
        <CustomerScan />
        <AutoPlay />
        <Footer />

      </div>


    </>


  )
}

export default Home
