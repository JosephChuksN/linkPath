import React from 'react'
import NavBar from '../Components/Home/Navbar'
import Homebody from '../Components/Home/Homebody'
import HowItWorks from '../Components/Home/HowItWorks'
import AppFooter from '../Components/Home/AppFooter'
import Home2 from '../assets/Home2.svg'
import Home1 from '../assets/Home1.svg'


const HomePage = () => {
  return (
   <>
   <div className='relative'>
   <NavBar />
   <Homebody />
   <HowItWorks />
   <AppFooter />

   <span className='absolute -top-40 lg:top-0 right-0 z-0 '><img src={Home2} alt="deco" /></span>
   <span className='absolute top-64 z-0 lg:top-44 left-0'><img src={Home1} alt="deco" /></span>
   
   </div>
   
   </>
  )
}

export default HomePage