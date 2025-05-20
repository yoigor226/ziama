import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import HeaderProf from '../HeaderProf/HeaderProf';
import Footer from '../Footer/Footer';
import TableauBordProf from '../TableauBordProf/TableauBordProf';
import BibliothequeProf from '../BibliothequeProf/BibliothequeProf';
import VideothequeProf from '../VideothequeProf/VideothequeProf';
import MesClassePage from '../MesClassePage/MesClassePage';
import EspaceCollaboratif from '../EspaceCollaboratif/EspaceCollaboratif';


const PageProfesseur = () => {

    const [activeTab, setActiveTab] = useState("accueil");

  return (
    <div>
        <HeaderProf activeTab={activeTab} setActiveTab={setActiveTab}/>

        <div>
           
                <Routes>
                    <Route path="/acceuil" element={<TableauBordProf/>} />
                    <Route path="/bibliotheque" element={<BibliothequeProf />} />
                    <Route path="/videos" element={<VideothequeProf />} />
                    <Route path="/classes" element={<MesClassePage />} />
                    <Route path="/collaboratif" element={<EspaceCollaboratif />} />
                </Routes>
            
        </div> 

      <Footer/>
    </div>
  )
}

export default PageProfesseur
