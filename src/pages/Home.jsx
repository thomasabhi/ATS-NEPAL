
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer/Footer'
import HeroSection from '../components/main/Herosection'
import AtsNepalUI from '../components/main/AtsNepal'
import AtsNepalAppUI from '../components/main/AtsNepal1'
import AppInfo from '../components/main/AppInfo'
import ATSAppPromo from '../components/main/AtsAppPromo'
import About from './About'
import FrequentQues from '../components/main/FrequentQues'
import ContactMainPage from '../components/main/ContactMainPage'
import Subscribe from '../components/main/Subscribe'



const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AtsNepalUI />
  <hr className="my-2 max-w-7xl mx-auto border-none"/>

      <AtsNepalAppUI />
        <hr className="my-2 max-w-7xl mx-auto border-none"/>

      <AppInfo />
      <ATSAppPromo />
      <FrequentQues />
      <ContactMainPage />
      <Subscribe />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Home
