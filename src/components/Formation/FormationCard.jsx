import React from 'react'
import {
  Button,
} from "@material-tailwind/react";

import secu from '../../assets/secu.jpg'
import auto from '../../assets/auto.jpg'
import rebo from '../../assets/rebo.jpg'
import maintenance from '../../assets/maintenance.jpg'
import bt from '../../assets/bt.webp'
import solar from '../../assets/solar.webp'
import audi from '../../assets/audi.jpeg'
import manage from '../../assets/manage.webp'
import automate from '../../assets/automate.webp'
import habili from '../../assets/habili.webp'


const FormationCard = () => {

    const formation = [
        {
            id: 1,
            titre: "Installation Électrique BT",
            image: bt,
            prix: "150 000 FCFA",
            couleur: "bg-white"
        },

        {
            id: 2,
            titre: "Énergie Solaire: Conception et Réalisation",
            image: solar,
            prix: "200 000 FCFA",
            couleur: "bg-white"
        },

        {
            id: 3,
            titre: "Audit Énergétique",
            image: audi,
            prix: "180 000 FCFA",
            couleur: "bg-white"
        },

        {
            id: 4,
            titre: "Management de l'Énergie",
            image: manage,
            prix: "170 000 FCFA",
            couleur: "bg-white"
        },

        {
            id: 5,
            titre: "Autocad Électrique",
            image: auto,
            prix: "160 000 FCFA",
            couleur: "bg-white"
        },

        {
            id: 6,
            titre: "Rebobinage des Machines Électriques",
            image: rebo,
            prix: "190 000 FCFA",
            couleur: "bg-white"
        },

        {
            id: 7,
            titre: "Automates Programmables Industriel",
            image: automate,
            prix: "220 000 FCFA",
            couleur: "bg-white"
        },

        {
            id: 8,
            titre: "Habilitation Électrique",
            image: habili,
            prix: "140 000 FCFA",
            couleur: "bg-white"
        },

        {
                id: 9,
                titre: "Maintenance des Installations Électriques",
                image: maintenance,
                prix: "175 000 FCFA",
                couleur: "bg-white"
        },

        {
                id: 10,
                titre: "Sécurité Électrique",
                image: secu,
                prix: "165 000 FCFA",
                couleur: "bg-white"
        },
        
      ];

  return (
    <div className="flex items-center mt-28">
                    
                    <div className="ml-2 mr-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {formation.map((item) => (
                        <div
                          key={item.id}
                          className={`bg-green-500 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105`}
                        >
                          <div className="h-64 overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.titre}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>

                          <div className={`p-4 `}>
                            <div className="mt-2 text-white w-60 h-10 flex justify-between items-center">
                                <h3 className="text-xl font-semibold">
                                    {item.titre}
                                </h3>
                                
                            </div>

                            <div className=''>
                                <h3 className={`${item.couleur} ml-60 p-1 rounded-lg text-lg font-bold`}>
                                    {item.prix}
                                </h3>
                            </div>

                            </div>
                        </div>
                      ))}
                    </div>
    
                    
    
    
    </div>
  )
}

export default FormationCard
