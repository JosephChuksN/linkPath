import React from 'react'
import NavBar from '../Components/Home/Navbar'
import Homebody from '../Components/Home/Homebody'
import HowItWorks from '../Components/Home/HowItWorks'
import AppFooter from '../Components/Home/AppFooter'



const HomePage = () => {
  return (
   <>
   <div className='relative'>
   <NavBar />
   <Homebody />
   <HowItWorks />
   <AppFooter />
   </div>
   
   </>
  )
}

export default HomePage