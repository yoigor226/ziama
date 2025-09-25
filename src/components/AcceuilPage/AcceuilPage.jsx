import React from 'react';


import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import SecondBanner from '../SecondBanner/SecondBanner';
import ThirdBanner from '../Banner/ThirdBanner';
import FiveBanner from '../Banner/FiveBanner';
import ForBanner from '../Banner/ForBanner';
import SixBanner from '../Banner/SixBanner';
import About from '../About/About';
import ServicePhone from '../ServicePhone/ServicePhone'
import Location from '../Location/Location';
import Formation from '../Formation/Formation';
import Rdv from '../Rdv/Rdv';
import CategorieSection from '../CategorieSection/CategorieSection'

const AcceuilPage = () => {

  

  return (
    <div>
     
      <Header/>
      <Banner/>
      <About/>
      <CategorieSection/>
      <SecondBanner />
      <ThirdBanner/>
      <ForBanner/>
      <FiveBanner/>
      <SixBanner/>
      <ServicePhone/>
      <Rdv/>
      <Location/>
      <Footer/>
    </div>
  )
}

export default AcceuilPage
