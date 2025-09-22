import React, {useState} from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../assets/log.png'
import { useNavigate } from 'react-router-dom';



const FormationHeader = () => {
  const navigate = useNavigate();

  const goToDevisPage = () => {
    navigate('/devis');
  };

  const goToFormationPage = ()=>{
    navigate('/formation');
  }

  const goToRootPage = () => {
    navigate('/');
  };

  const [activeTab, setActiveTab] = useState("formation");
  const [showUserMenu, setShowUserMenu] = useState(false);
  
    
  return (
    <div>
   <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img src={logo} width="50" height="50"></img>
                <span className="ml-4 mr-4 text-xl font-bold text-green-600">
                  ZIAMA ENGINEERING
                </span>
              </div>
            </div>

            {/* Navigation principale */}
            <nav className="hidden md:flex space-x-8 items-center">
              <button
                onClick={ goToRootPage}
                className={`whitespace-nowrap cursor-pointer flex items-center px-3 py-2 text-sm font-medium ${activeTab === "accueil" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500 hover:text-green-500"}`}
              >
                <i className="fas fa-home mr-2"></i>
                Accueil
              </button>


              <button
                onClick={goToRootPage }
                className={`whitespace-nowrap cursor-pointer flex items-center px-3 py-2 text-sm font-medium ${activeTab === "service" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500 hover:text-green-500"}`}
              >
                <i className="fas fa-toolbox mr-2"></i>
                Service
              </button>

              <button
                onClick={() => setActiveTab("formation") && goToFormationPage}
                className={`whitespace-nowrap cursor-pointer flex items-center px-3 py-2 text-sm font-medium ${activeTab === "formation" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500 hover:text-green-500"}`}
              >
                <i className="fas fa-graduation-cap mr-2"></i>
                Formations
              </button>
              
              <button
                onClick={goToRootPage}
                className={`whitespace-nowrap cursor-pointer flex items-center px-3 py-2 text-sm font-medium ${activeTab === "about" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500 hover:text-green-500"}`}
              >
                <i className="fas fa-info-circle mr-2"></i>
                A propos
              </button>

              {/* <button
                onClick={goToDevisPage}
                className={`whitespace-nowrap cursor-pointer flex items-center px-3 py-2  text-gray  text-sm font-medium ${activeTab === "devis" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500 hover:text-green-500"}`}
              >
                <i className="far fa-calendar-check mr-2"></i>
                Prendre un rendez-vous
              </button> */}

              <button
                onClick={goToDevisPage}
                className={`whitespace-nowrap cursor-pointer flex items-center px-3 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 text-sm font-medium ${activeTab === "devis" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500 hover:text-green-500"}`}
              >
                
                Demander un devis
              </button>
                        
              
            </nav>

          

            {/* Menu burger */}
            <div className="flex items-center md:hidden">
              <div className="flex items-center">
                <div className="ml-4 flex items-center md:ml-6">
                  <div className="relative">
                    <button
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className="whitespace-nowrap !rounded-button cursor-pointer max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <i className="fas fa-bars "></i>
                      </div>
                    </button>

                    {showUserMenu && (
                      <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <button
                          onClick={() => setActiveTab("accueil")}
                          className={`whitespace-nowrap cursor-pointer flex items-center px-3 py-2 text-sm font-medium ${activeTab === "accueil" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500 hover:text-green-500"}`}
                        >
                          <i className="fas fa-home mr-2"></i>
                          Accueil
                        </button>


                        <button
                          onClick={() => setActiveTab("service")}
                          className={`whitespace-nowrap cursor-pointer flex items-center px-3 py-2 text-sm font-medium ${activeTab === "service" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500 hover:text-green-500"}`}
                        >
                          <i className="fas fa-toolbox mr-2"></i>
                          Service
                        </button>
                        

                        <button
                          onClick={goToDevisPage}
                          className={`whitespace-nowrap cursor-pointer flex items-center px-3 py-2  text-gray  text-sm font-medium ${activeTab === "devis" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500 hover:text-green-500"}`}
                        >
                          <i class="far fa-calendar-check mr-2"></i>
                          Prendre un rendez-vous
                        </button>

                        <button
                          onClick={() => setActiveTab("devis")}
                          className={`whitespace-nowrap cursor-pointer flex items-center px-3 py-2 text-sm font-medium ${activeTab === "devis" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500 hover:text-green-500"}`}
                        >
                          <i className="fas fa-tasks mr-2"></i>
                          Demander un devis
                        </button>

                        <button
                          onClick={() => setActiveTab("about")}
                          className={`whitespace-nowrap cursor-pointer flex items-center px-3 py-2 text-sm font-medium ${activeTab === "about" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500 hover:text-green-500"}`}
                        >
                          <i className="fas fa-info-circle mr-2"></i>
                          A propos
                        </button>
                      </div>
                    )}
                  </div>

                
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

    </div>
  )
}

export default FormationHeader
