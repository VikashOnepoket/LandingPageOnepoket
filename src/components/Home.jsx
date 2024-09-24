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


const Home = () => {
  return (

    <>
      <NavTop />
      <Navbar />
      <HeroMain />
      <Fold2card />
      {/* <GifAnimation /> */}
      {/* <Direct/> */}
      <CustomerScan />
      {/* <Direct/> */}
      {/* <div>
        <img src={line} />
      </div> */}
      {/* <FaqSection /> */}
      {/* <ScanMe/> */}
      {/* <div>
        <img src={line} />
      </div> */}
   
      <Footer />

      {/* <button className="fixed bottom-0 left-0 w-full bg-blue-500 text-white p-4">
        Fixed Button at the Bottom
      </button> */}
    </>


  )
}

export default Home
