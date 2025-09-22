import React from 'react'

import {
  Button,
} from "@material-tailwind/react";
import audit from '../../assets/audit.png'
import mana from '../../assets/mana.png'
import ing from '../../assets/ing.webp'
import ener from '../../assets/ener.webp'
import form from '../../assets/form.webp'

import { useNavigate } from 'react-router-dom';
    


const ServicePhone = () => {


    const navigate = useNavigate();

  const goToFormationPage = ()=>{
    navigate('/formation');
  }

    const service = [
    {
      id: 1,
      titre: "Audit Énergétique",
      image:audit,
    },
    {
      id: 2,
      titre: "Management de l'Énergie",
      image:mana,
    },
    {
      id: 3,
      titre: "Ingénierie Électrique",
      image:ing,

    },
    {
      id: 4,
      titre: "Énergies Renouvelables",
      image:ener,

    },

    {
      id: 5,
      titre: "Formations Pratiques",
      image:form,
      page: goToFormationPage
    },
    
  ];

  return (
    <div className="flex items-center md:hidden">
                
                <div className="ml-2 mr-2 grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6">
                  {service.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
                    >
                      <div className="h-64 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.titre}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="p-4">
                        

                        
                       
                        <div className="mt-2 flex justify-between items-center">
                          <h3 className="text-lg font-semibold text-gray-900">
                          {item.titre}
                        </h3>
                          <a href="#" className="inline-block">
                                      <Button variant="text" onClick={item.page} className="flex items-center gap-2 button1">
                                        Plus
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          className="h-4 w-4"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                          />
                                        </svg>
                                      </Button>
                                    </a>
                        </div>
                        
                      </div>
                    </div>
                  ))}
                </div>

                


              </div>
  )
}

export default ServicePhone
