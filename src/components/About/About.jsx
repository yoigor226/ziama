import React from 'react'
import b6 from '../../assets/b6.jpg'

const About = () => {
  return (
    <div id="about" className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Partie gauche : texte et services */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-blue-600">À Propos de</span><br />
              ZIAMA ENGINEERING
            </h2>
            <p className="text-gray-700 mb-6">
              Entreprise pionnière de l'efficacité énergétique au Burkina Faso, nous proposons des solutions innovantes en ingénierie électrique et énergies renouvelables adaptées aux besoins locaux. Notre mission est d'améliorer l'efficacité énergétique, réduire la dépendance aux énergies coûteuses et polluantes et promouvoir des alternatives durables pour une stabilité à long terme.
            </p>
            <p className="text-gray-700 mb-8">
              Spécialisée en ingénierie électrique, ZIAMA allie technologie avancée et expertise locale pour un futur énergétique plus propre et efficace.
            </p>

            {/* Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-leaf text-blue-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Solutions Durables</h3>
                  <p className="text-gray-600 text-sm">
                    Promotion d'alternatives durables pour une stabilité énergétique à long terme
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-lightbulb text-blue-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Innovation Locale</h3>
                  <p className="text-gray-600 text-sm">
                    Technologies avancées adaptées aux besoins spécifiques du Burkina Faso
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-shield-alt text-blue-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Expertise Reconnue</h3>
                  <p className="text-gray-600 text-sm">
                    Équipe d'ingénieurs qualifiés avec une expertise locale approfondie
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-money-bill-wave text-blue-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Économies Garanties</h3>
                  <p className="text-gray-600 text-sm">
                    Réduction significative des coûts énergétiques et de la dépendance aux énergies coûteuses
                  </p>
                </div>
              </div>
            </div>

            <div className=' items-center md:hidden'>

              

                <div className=" top-4 right-4 bg-yellow-400 text-gray-800 p-4 rounded-lg shadow-lg text-center">
                    <div className="text-2xl font-bold">4+</div>
                    <div className="text-sm">Années d'Expérience</div>
                </div>

                <div className="mt-4 top-4 right-4 bg-blue-400 text-gray-800 p-4 rounded-lg shadow-lg text-center">
                    <div className="text-2xl font-bold">150+</div>
                    <div className="text-sm">Personnes Formation</div>
                </div>

                <div className="mt-4 mb-4 bottom-4 right-4 bg-white text-gray-800 p-4 rounded-lg shadow-lg text-center">
                    <div className="text-2xl font-bold text-blue-600">53+</div>
                    <div className="text-sm">Projets Réalisés</div>
                </div>
            </div>
            {/* Bouton */}

            <div className="hidden md:block">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center">
                <i className="fas fa-arrow-right mr-2"></i>
                Découvrir nos services
                </button>
            </div>
          </div>

          {/* Partie droite : image et statistiques */}
          <div className="w-full md:w-1/2 p-6 relative hidden md:block">
            <div className="relative rounded-lg overflow-hidden">
              <img
                className="w-full h-96 object-cover"
                src={b6}
                alt="Panneaux solaires"
              />

              {/* Badges de statistiques */}
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-800 p-4 rounded-lg shadow-lg text-center">
                <div className="text-2xl font-bold">4+</div>
                <div className="text-sm">Années d'Expérience</div>
              </div>


              <div className="absolute bottom-4 left-4 bg-blue-400 text-gray-800 p-4 rounded-lg shadow-lg text-center">
                <div className="text-2xl font-bold text-white">150+</div>
                <div className="text-sm text-white">Personnes Formation</div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white text-gray-800 p-4 rounded-lg shadow-lg text-center">
                <div className="text-2xl font-bold text-blue-600">53+</div>
                <div className="text-sm">Projets Réalisés</div>
              </div>

              

              


            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
