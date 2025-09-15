import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import AcceuilPage from './components/AcceuilPage/AcceuilPage'
import Devis from './components/Devis/Devis';
import SecondBanner from './components/SecondBanner/SecondBanner';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AcceuilPage />} />
        <Route path="/devis" element={<Devis />} />
        
        <Route path="/service" element={<SecondBanner />} />
        {/* <Route path="/pageProfesseur" element={<PageProfesseur />} /> */}
        {/* <Route path="/uploadDocument" element={<UploadDocument/>} />
        <Route path="/uploadVideos" element={<UploadVideos />} /> */}
        {/*<Route path="/videos" element={<VideothequeProf />} />
        <Route path="/classes" element={<MesClassePage />} />
        <Route path="/collaboratif" element={<EspaceCollaboratif />} /> */}
      </Routes>
    </Router>
       
  )
}

export default App
