import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import SecondNavbar from './components/SecondNavbar/SecondNavbar';
import SecondBody from './components/SecondBody/SecondBody';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import CategorieSection from './components/CategorieSection/CategorieSection';
import OffreSection from './components/OffreSection/OffreSection';
import PromoBanner from './components/PromoBanner/PromoBanner';
import AcceuilPage from './components/AcceuilPage/AcceuilPage'

import Login from './components/Login/Login';
import Inscription from './components/Inscription/Inscription';
import PageEtudiant from './components/PageEtudiant/PageEtudiant';
import PageProfesseur from './components/PageProfesseur/PageProfesseur';
import TableauBordProf from './components/TableauBordProf/TableauBordProf';
import VideothequeProf from './components/VideothequeProf/VideothequeProf';
import BibliothequeProf from './components/BibliothequeProf/BibliothequeProf';
import MesClassePage from './components/MesClassePage/MesClassePage';
import EspaceCollaboratif from './components/EspaceCollaboratif/EspaceCollaboratif';
import UploadDocument from './components/UploadDocument/UploadDocument';
import UploadVideos from './components/UploadVideos/UploadVideos';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AcceuilPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/pageEtudiant" element={<PageEtudiant />} />
        <Route path="/pageProfesseur" element={<PageProfesseur />} />
        <Route path="/uploadDocument" element={<UploadDocument/>} />
        <Route path="/uploadVideos" element={<UploadVideos />} />
        {/*<Route path="/videos" element={<VideothequeProf />} />
        <Route path="/classes" element={<MesClassePage />} />
        <Route path="/collaboratif" element={<EspaceCollaboratif />} /> */}
      </Routes>
    </Router>
       
  )
}

export default App
