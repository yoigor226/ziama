import React from 'react'
import btt from '../../assets/btt.webp'
import aud from '../../assets/aud.webp'
import ints from '../../assets/ints.webp'
import reno from '../../assets/reno.jpg'


const CategorieSection = () => {
  return (
    <section className="mt-10 p-4 bg-green-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-green-600 font-bold text-center mb-6">
            Projets Réalisés
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Conception électrique BT",
                nbr: 10,
                image: btt,
                
              },
              {
                title: "Audit énergétique",
                nbr: 7,
                image:aud,
                  
              },
              {
                title: "Installation Bâtiment",
                nbr: 25,
                image:ints,
                  
              },
              {
                title: "Énergies renouvelables",
                nbr: 11,
                image:reno,
                  
              },
            ].map((category, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg h-70  cursor-pointer"
              >
                <div className="absolute inset-0 bg-red/300 group-hover:bg-red/40 transition duration-300 z-10"></div>
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
                

                <div className="absolute bottom-0 left-0 right-0 p-2 z-1 bg-yellow-400   rounded-lg shadow-lg text-center">
                 
                 <h3 className="text-xl font-semibold mb-2">
                    {category.title}
                  </h3>

                  <p className="text-xl  text-white transition-opacity duration-300">
                    
                    {category.nbr}
                  </p>

                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default CategorieSection
