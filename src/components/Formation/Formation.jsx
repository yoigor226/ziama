import React from 'react'
import Header from '../Header/Header';
import FormationCard from './FormationCard'
import Footer from '../Footer/Footer';
import Inscription from './Inscription';
import FormationHeader from './FormationHeader';

const Formation = () => {
  return (
    <div>
      <FormationHeader/>  
      <FormationCard/>
      <Inscription/>
      <Footer/>
    </div>
  )
}

export default Formation
