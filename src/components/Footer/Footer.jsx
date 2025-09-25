import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-10 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacts</h3>

              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-white-400 mr-2"></i>
                  <span className="text-white-400">Ouagadougou</span>
                </div>
                <div className="flex items-center">
                  
                  <span className="text-white-400"><i className="fas fa-phone-alt text-white-400 mr-2"></i>+226 76 57 61 01
                    <br></br><i className="fas fa-phone-alt text-white-400 mr-2"></i>+226 56 61 99 69
                    </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-white-400 mr-2"></i>
                  <span className="text-white-400">Bobo-Dioulasso</span>
                </div>
                <div className="flex items-center">
                  
                  <span className="text-white-400"><i className="fas fa-phone-alt text-white-400 mr-2"></i>+226 61 79 46 99
                  <br></br><i className="fas fa-phone-alt text-white-400 mr-2"></i>+226 76 57 61 01
                  <br></br><i className="fas fa-phone-alt text-white-400 mr-2"></i>+226 53 06 38 45
                  </span>
                  
                </div>


                <div className="flex items-center">
                  
                  <span className="text-white-400"><i className="fab fa-whatsapp text-xl mr-2"></i>WhatsApp
                    <br></br> <span className='ml-2'>+226 61 79 46 99</span>
                  </span>
                  
                </div>
                


                <div className="flex items-center">
                  <i className="fas fa-envelope text-white-400 mr-2"></i>
                  <span className="text-white-400">engineeringziama@gmail.com</span>
                </div>
              </div>

            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Audit Énergétique
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Management de l'Énergie
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Ingénierie Électrique
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Énergies Renouvelables
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Formations Pratiques
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Assistance technique
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Signaler un problème
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-2">
                  Inscrivez-vous à notre newsletter
                </h4>
                <div className="flex">
                  <input
                    type="email"
                    className="border-none px-4 py-2 w-full text-gray-900 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Votre email"
                  />
                  <button className="whitespace-nowrap !rounded-button cursor-pointer bg-indigo-600 px-4 py-2 text-white rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>
          </div>



          
        </div>
      </footer>
  )
}

export default Footer