import React, { FC } from 'react'
import NavBar from '../components/Home/Navbar'
import Homebody from '../components/Home/Homebody';
import HowItWorks from '../components/Home/HowItWorks';
import AppFooter from '../components/Home/AppFooter';


const Home:FC = () => {
  return (
      <>
        <div className="relative">
          <NavBar />
          <Homebody />
          <HowItWorks />
          <AppFooter />
        </div>
      </>
  );
}

export default Home