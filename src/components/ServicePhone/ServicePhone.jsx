import React from 'react'

import {
  Button,
} from "@material-tailwind/react";


    


const ServicePhone = () => {

    const service = [
    {
      id: 1,
      titre: "Audit Énergétique",
      image:"/src/assets/audit.png",
    },
    {
      id: 2,
      titre: "Management de l'Énergie",
      image:"/src/assets/mana.png",
    },
    {
      id: 3,
      titre: "Ingénierie Électrique",
      image:"/src/assets/ing.jpg",

    },
    {
      id: 4,
      titre: "Énergies Renouvelables",
      image:"/src/assets/ener.webp",

    },

    {
      id: 5,
      titre: "Formations Pratiques",
      image:"/src/assets/form.webp",
    },
    
  ];

  return (
    <div className="flex items-center md:hidden">
                
                <div className="ml-2 mr-2 grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6">
                  {service.map((livre) => (
                    <div
                      key={livre.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
                    >
                      <div className="h-64 overflow-hidden">
                        <img
                          src={livre.image}
                          alt={livre.titre}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="p-4">
                        

                        
                       
                        <div className="mt-2 flex justify-between items-center">
                          <h3 className="text-lg font-semibold text-gray-900">
                          {livre.titre}
                        </h3>
                          <a href="#" className="inline-block">
                                      <Button variant="text" className="flex items-center gap-2 button1">
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
