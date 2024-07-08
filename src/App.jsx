import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/Hero/HeroSection'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import HeroMain from './components/HeroMain'
import OnboardingForm from './components/Onboarding/OnboardingForm'
import Login from './components/Login/Login'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/hero' element={<HeroMain />} ></Route>
        <Route path='/login' element={<Login />} ></Route>

        <Route path='/onboarding' element={<OnboardingForm />}></Route>
      </Routes>
    </>
  )
}

export default App
