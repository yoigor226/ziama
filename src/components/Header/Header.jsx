import React, {useState} from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';



const Header = () => {

  const [activeTab, setActiveTab] = useState("accueil");
  const [searchQuery, setSearchQuery] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);
    
  return (
    <div>
   <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <i className="fas fa-graduation-cap text-indigo-600 text-2xl mr-2"></i>
                <span className="mr-4 text-xl font-bold text-indigo-600">
                  FocusEduc
                </span>
              </div>
            </div>

            {/* Navigation principale */}
            <nav className="hidden md:flex space-x-8 items-center">
              <button
                onClick={() => setActiveTab("accueil")}
                className={`whitespace-nowrap cursor-pointer flex items-center px-3 py-2 text-sm font-medium ${activeTab === "accueil" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-indigo-500"}`}
              >
                <i className="fas fa-home mr-2"></i>
                Accueil
              </button>
              <button
                onClick={() => setActiveTab("bibliotheque")}
                className={`whitespace-nowrap cursor-pointer flex items-center px-3 py-2 text-sm font-medium ${activeTab === "bibliotheque" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-indigo-500"}`}
              >
                <i className="fas fa-book mr-2"></i>
                Bibliothèque
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`whitespace-nowrap cursor-pointer flex items-center px-3 py-2 text-sm font-medium ${activeTab === "videos" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-indigo-500"}`}
              >
                <i className="fas fa-video mr-2"></i>
                Vidéothèque
              </button>
              <button
                onClick={() => setActiveTab("exercices")}
                className={`whitespace-nowrap cursor-pointer flex items-center px-3 py-2 text-sm font-medium ${activeTab === "exercices" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-indigo-500"}`}
              >
                <i className="fas fa-tasks mr-2"></i>
                Exercices
              </button>
              <button
                onClick={() => setActiveTab("collaboratif")}
                className={`whitespace-nowrap cursor-pointer flex items-center px-3 py-2 text-sm font-medium ${activeTab === "collaboratif" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-indigo-500"}`}
              >
                <i className="fas fa-users mr-2"></i>
                Espace Collaboratif
              </button>
              <button
                onClick={() => setActiveTab("tableau-de-bord")}
                className={`whitespace-nowrap cursor-pointer flex items-center px-3 py-2 text-sm font-medium ${activeTab === "tableau-de-bord" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 hover:text-indigo-500"}`}
              >
                <i className="fas fa-chart-line mr-2"></i>
                Tableau de Bord
              </button>
            </nav>

            {/* Barre de recherche */}
            <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Rechercher
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-search text-gray-400"></i>
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Rechercher..."
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Profil utilisateur */}
            <div className="flex items-center">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="whitespace-nowrap !rounded-button cursor-pointer max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">Ouvrir le menu utilisateur</span>
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <i className="fas fa-user"></i>
                    </div>
                  </button>

                  {showUserMenu && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Votre Profil
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Paramètres
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Se déconnecter
                      </a>
                    </div>
                  )}
                </div>

                {/* <button className="ml-4 m-4 whitespace-nowrap !rounded-button cursor-pointer inline-flex items-center px-4 py-2  text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <i className="fas fa-download mr-2"></i>
                  Hors Ligne
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </header>


      {(activeTab === "bibliotheque" ||
            activeTab === "videos" ||
            activeTab === "exercices" ||
            activeTab === "collaboratif") && (
            <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
              <div className="text-center">
                <i className="fas fa-tools text-indigo-500 text-4xl mb-4"></i>
                <h3 className="text-xl font-medium text-gray-900">
                  Cette section est en cours de développement
                </h3>
                <p className="mt-2 text-gray-600">
                  Nous travaillons actuellement sur cette fonctionnalité.
                </p>
              </div>
            </div>
          )}
    </div>
  )
}

export default Header
