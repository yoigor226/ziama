import React from 'react'
import Slider from 'react-slick'
import '/src/index.css'
import '/src/components/Banner/banner.css';
import b2 from '../../assets/b2.jpg'
import logo from '../../assets/log.png'
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
    


const Banner = () => {

  // const navigate = useNavigate();

  // const goToLoginPage = () => {
  //   navigate('/login');
  // };

  // const goToInscriptionPage = () => {
  //   navigate('/inscription');
  // };
    
  return (
    <main id='home' className="pt-20 pb-10 h-[800px] w-full relative z-0">
      
      <div className="w-full h-full absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={b2}
          alt="Environnement moderne"
        />
        
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Contenu superposé */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
       
        <div className="text-white mb-10">
          <div className=" hidden md:flex text-white mb-16 text-center flex flex-col items-center justify-center">

            <img src={logo} 
              alt="Logo ou illustration"
              className="w-32 h-32 mb-4 object-contain"></img>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-green-500">
              ZIAMA ENGINEERING
            </h1>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white max-w-5xl mx-auto">
         
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-green-500 mb-4 text-4xl">
                <i className="fas fa-bolt"></i>
              </div>
              <h2 className="text-xl font-semibold mb-2">Ingénierie Électrique</h2>
              <p className="text-sm md:text-base">
                Solutions innovantes en ingénierie électrique pour répondre aux besoins locaux et industriels.
              </p>
            </div>

            
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-green-500 mb-4 text-4xl">
                <i className="fas fa-leaf"></i>
              </div>
              <h2 className="text-xl font-semibold mb-2">Énergies Renouvelables</h2>
              <p className="text-sm md:text-base">
                Promotion des énergies durables pour réduire la dépendance aux sources polluantes.
              </p>
            </div>

            
            <div className="flex flex-col items-center text-center p-4">
              <div className="text-green-500 mb-4 text-4xl">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h2 className="text-xl font-semibold mb-2">Efficacité Énergétique</h2>
              <p className="text-sm md:text-base">
                Amélioration de l'efficacité énergétique pour une stabilité à long terme.
              </p>
            </div>

          </div>

          <div className='text-white mt-4 text-center flex flex-col items-center justify-center'>
            
            <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#services').scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
                className="hover:text-blue-400"
              >
                <button
                    
                  className='button'
                >
                    
                  Nos Services
                </button>

            </Link>

          </div>  
            

        </div>

        {/* Barre de recherche et filtres */}
        {/* <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          
            
            
            
          
        </div> */}
      </div>
    </main>
  );
}

export default Banner
