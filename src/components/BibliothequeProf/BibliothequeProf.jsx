import React from 'react'

import { useNavigate } from 'react-router-dom';



const BibliothequeProf = () => {

  const navigate = useNavigate();
  
  const goToUploadPage = () => {
    navigate('/uploadDocument');
  };
  // Données pour les livres recommandés
  const livresRecommandes = [
    {
      id: 1,
      titre: "Mathématiques Avancées",
      auteur: "Prof. Martin Dubois",
      matiere: "Mathématiques",
      niveau: "Université",
      disponibleHorsLigne: true,
      image:
        "https://readdy.ai/api/search-image?query=Professional%20mathematics%20textbook%20with%20elegant%20cover%20design%2C%20minimalist%20style%2C%20soft%20gradient%20background%20in%20light%20blue%2C%20educational%20content%20visualization%2C%20modern%20academic%20book%20layout&width=300&height=400&seq=1&orientation=portrait",
    },
    {
      id: 2,
      titre: "Introduction à la Physique Quantique",
      auteur: "Dr. Sophie Laurent",
      matiere: "Physique",
      niveau: "Master",
      disponibleHorsLigne: false,
      image:
        "https://readdy.ai/api/search-image?query=Quantum%20physics%20textbook%20with%20modern%20cover%20design%2C%20abstract%20quantum%20particles%20visualization%2C%20professional%20academic%20layout%2C%20light%20background%20with%20blue%20and%20purple%20accents%2C%20educational%20scientific%20book&width=300&height=400&seq=2&orientation=portrait",
    },
    {
      id: 3,
      titre: "Histoire de l'Art Contemporain",
      auteur: "Claire Moreau",
      matiere: "Arts",
      niveau: "Licence",
      disponibleHorsLigne: true,
      image:
        "https://readdy.ai/api/search-image?query=Contemporary%20art%20history%20book%20with%20elegant%20cover%2C%20featuring%20minimalist%20design%2C%20soft%20color%20palette%2C%20artistic%20elements%2C%20professional%20academic%20layout%2C%20educational%20art%20textbook%20with%20clean%20background&width=300&height=400&seq=3&orientation=portrait",
    },
    {
      id: 4,
      titre: "Programmation en Python",
      auteur: "Thomas Lefevre",
      matiere: "Informatique",
      niveau: "Débutant",
      disponibleHorsLigne: true,
      image:
        "https://readdy.ai/api/search-image?query=Python%20programming%20textbook%20with%20clean%20modern%20cover%20design%2C%20code%20visualization%2C%20tech-inspired%20layout%2C%20light%20background%20with%20blue%20accents%2C%20professional%20educational%20computer%20science%20book&width=300&height=400&seq=4&orientation=portrait",
    },

    {
      id: 1,
      titre: "Mathématiques Avancées",
      auteur: "Prof. Martin Dubois",
      matiere: "Mathématiques",
      niveau: "Université",
      disponibleHorsLigne: true,
      image:
        "https://readdy.ai/api/search-image?query=Professional%20mathematics%20textbook%20with%20elegant%20cover%20design%2C%20minimalist%20style%2C%20soft%20gradient%20background%20in%20light%20blue%2C%20educational%20content%20visualization%2C%20modern%20academic%20book%20layout&width=300&height=400&seq=1&orientation=portrait",
    },
    {
      id: 2,
      titre: "Introduction à la Physique Quantique",
      auteur: "Dr. Sophie Laurent",
      matiere: "Physique",
      niveau: "Master",
      disponibleHorsLigne: false,
      image:
        "https://readdy.ai/api/search-image?query=Quantum%20physics%20textbook%20with%20modern%20cover%20design%2C%20abstract%20quantum%20particles%20visualization%2C%20professional%20academic%20layout%2C%20light%20background%20with%20blue%20and%20purple%20accents%2C%20educational%20scientific%20book&width=300&height=400&seq=2&orientation=portrait",
    },
    {
      id: 3,
      titre: "Histoire de l'Art Contemporain",
      auteur: "Claire Moreau",
      matiere: "Arts",
      niveau: "Licence",
      disponibleHorsLigne: true,
      image:
        "https://readdy.ai/api/search-image?query=Contemporary%20art%20history%20book%20with%20elegant%20cover%2C%20featuring%20minimalist%20design%2C%20soft%20color%20palette%2C%20artistic%20elements%2C%20professional%20academic%20layout%2C%20educational%20art%20textbook%20with%20clean%20background&width=300&height=400&seq=3&orientation=portrait",
    },
    {
      id: 4,
      titre: "Programmation en Python",
      auteur: "Thomas Lefevre",
      matiere: "Informatique",
      niveau: "Débutant",
      disponibleHorsLigne: true,
      image:
        "https://readdy.ai/api/search-image?query=Python%20programming%20textbook%20with%20clean%20modern%20cover%20design%2C%20code%20visualization%2C%20tech-inspired%20layout%2C%20light%20background%20with%20blue%20accents%2C%20professional%20educational%20computer%20science%20book&width=300&height=400&seq=4&orientation=portrait",
    },


    {
      id: 1,
      titre: "Mathématiques Avancées",
      auteur: "Prof. Martin Dubois",
      matiere: "Mathématiques",
      niveau: "Université",
      disponibleHorsLigne: true,
      image:
        "https://readdy.ai/api/search-image?query=Professional%20mathematics%20textbook%20with%20elegant%20cover%20design%2C%20minimalist%20style%2C%20soft%20gradient%20background%20in%20light%20blue%2C%20educational%20content%20visualization%2C%20modern%20academic%20book%20layout&width=300&height=400&seq=1&orientation=portrait",
    },
    {
      id: 2,
      titre: "Introduction à la Physique Quantique",
      auteur: "Dr. Sophie Laurent",
      matiere: "Physique",
      niveau: "Master",
      disponibleHorsLigne: false,
      image:
        "https://readdy.ai/api/search-image?query=Quantum%20physics%20textbook%20with%20modern%20cover%20design%2C%20abstract%20quantum%20particles%20visualization%2C%20professional%20academic%20layout%2C%20light%20background%20with%20blue%20and%20purple%20accents%2C%20educational%20scientific%20book&width=300&height=400&seq=2&orientation=portrait",
    },
    {
      id: 3,
      titre: "Histoire de l'Art Contemporain",
      auteur: "Claire Moreau",
      matiere: "Arts",
      niveau: "Licence",
      disponibleHorsLigne: true,
      image:
        "https://readdy.ai/api/search-image?query=Contemporary%20art%20history%20book%20with%20elegant%20cover%2C%20featuring%20minimalist%20design%2C%20soft%20color%20palette%2C%20artistic%20elements%2C%20professional%20academic%20layout%2C%20educational%20art%20textbook%20with%20clean%20background&width=300&height=400&seq=3&orientation=portrait",
    },
    {
      id: 4,
      titre: "Programmation en Python",
      auteur: "Thomas Lefevre",
      matiere: "Informatique",
      niveau: "Débutant",
      disponibleHorsLigne: true,
      image:
        "https://readdy.ai/api/search-image?query=Python%20programming%20textbook%20with%20clean%20modern%20cover%20design%2C%20code%20visualization%2C%20tech-inspired%20layout%2C%20light%20background%20with%20blue%20accents%2C%20professional%20educational%20computer%20science%20book&width=300&height=400&seq=4&orientation=portrait",
    },

    {
      id: 1,
      titre: "Mathématiques Avancées",
      auteur: "Prof. Martin Dubois",
      matiere: "Mathématiques",
      niveau: "Université",
      disponibleHorsLigne: true,
      image:
        "https://readdy.ai/api/search-image?query=Professional%20mathematics%20textbook%20with%20elegant%20cover%20design%2C%20minimalist%20style%2C%20soft%20gradient%20background%20in%20light%20blue%2C%20educational%20content%20visualization%2C%20modern%20academic%20book%20layout&width=300&height=400&seq=1&orientation=portrait",
    },
    {
      id: 2,
      titre: "Introduction à la Physique Quantique",
      auteur: "Dr. Sophie Laurent",
      matiere: "Physique",
      niveau: "Master",
      disponibleHorsLigne: false,
      image:
        "https://readdy.ai/api/search-image?query=Quantum%20physics%20textbook%20with%20modern%20cover%20design%2C%20abstract%20quantum%20particles%20visualization%2C%20professional%20academic%20layout%2C%20light%20background%20with%20blue%20and%20purple%20accents%2C%20educational%20scientific%20book&width=300&height=400&seq=2&orientation=portrait",
    },
    {
      id: 3,
      titre: "Histoire de l'Art Contemporain",
      auteur: "Claire Moreau",
      matiere: "Arts",
      niveau: "Licence",
      disponibleHorsLigne: true,
      image:
        "https://readdy.ai/api/search-image?query=Contemporary%20art%20history%20book%20with%20elegant%20cover%2C%20featuring%20minimalist%20design%2C%20soft%20color%20palette%2C%20artistic%20elements%2C%20professional%20academic%20layout%2C%20educational%20art%20textbook%20with%20clean%20background&width=300&height=400&seq=3&orientation=portrait",
    },
    {
      id: 4,
      titre: "Programmation en Python",
      auteur: "Thomas Lefevre",
      matiere: "Informatique",
      niveau: "Débutant",
      disponibleHorsLigne: true,
      image:
        "https://readdy.ai/api/search-image?query=Python%20programming%20textbook%20with%20clean%20modern%20cover%20design%2C%20code%20visualization%2C%20tech-inspired%20layout%2C%20light%20background%20with%20blue%20accents%2C%20professional%20educational%20computer%20science%20book&width=300&height=400&seq=4&orientation=portrait",
    },

    {
      id: 1,
      titre: "Mathématiques Avancées",
      auteur: "Prof. Martin Dubois",
      matiere: "Mathématiques",
      niveau: "Université",
      disponibleHorsLigne: true,
      image:
        "https://readdy.ai/api/search-image?query=Professional%20mathematics%20textbook%20with%20elegant%20cover%20design%2C%20minimalist%20style%2C%20soft%20gradient%20background%20in%20light%20blue%2C%20educational%20content%20visualization%2C%20modern%20academic%20book%20layout&width=300&height=400&seq=1&orientation=portrait",
    },
    {
      id: 2,
      titre: "Introduction à la Physique Quantique",
      auteur: "Dr. Sophie Laurent",
      matiere: "Physique",
      niveau: "Master",
      disponibleHorsLigne: false,
      image:
        "https://readdy.ai/api/search-image?query=Quantum%20physics%20textbook%20with%20modern%20cover%20design%2C%20abstract%20quantum%20particles%20visualization%2C%20professional%20academic%20layout%2C%20light%20background%20with%20blue%20and%20purple%20accents%2C%20educational%20scientific%20book&width=300&height=400&seq=2&orientation=portrait",
    },
    {
      id: 3,
      titre: "Histoire de l'Art Contemporain",
      auteur: "Claire Moreau",
      matiere: "Arts",
      niveau: "Licence",
      disponibleHorsLigne: true,
      image:
        "https://readdy.ai/api/search-image?query=Contemporary%20art%20history%20book%20with%20elegant%20cover%2C%20featuring%20minimalist%20design%2C%20soft%20color%20palette%2C%20artistic%20elements%2C%20professional%20academic%20layout%2C%20educational%20art%20textbook%20with%20clean%20background&width=300&height=400&seq=3&orientation=portrait",
    },
    {
      id: 4,
      titre: "Programmation en Python",
      auteur: "Thomas Lefevre",
      matiere: "Informatique",
      niveau: "Débutant",
      disponibleHorsLigne: true,
      image:
        "https://readdy.ai/api/search-image?query=Python%20programming%20textbook%20with%20clean%20modern%20cover%20design%2C%20code%20visualization%2C%20tech-inspired%20layout%2C%20light%20background%20with%20blue%20accents%2C%20professional%20educational%20computer%20science%20book&width=300&height=400&seq=4&orientation=portrait",
    },

    {
      id: 1,
      titre: "Mathématiques Avancées",
      auteur: "Prof. Martin Dubois",
      matiere: "Mathématiques",
      niveau: "Université",
      disponibleHorsLigne: true,
      image:
        "https://readdy.ai/api/search-image?query=Professional%20mathematics%20textbook%20with%20elegant%20cover%20design%2C%20minimalist%20style%2C%20soft%20gradient%20background%20in%20light%20blue%2C%20educational%20content%20visualization%2C%20modern%20academic%20book%20layout&width=300&height=400&seq=1&orientation=portrait",
    },
    {
      id: 2,
      titre: "Introduction à la Physique Quantique",
      auteur: "Dr. Sophie Laurent",
      matiere: "Physique",
      niveau: "Master",
      disponibleHorsLigne: false,
      image:
        "https://readdy.ai/api/search-image?query=Quantum%20physics%20textbook%20with%20modern%20cover%20design%2C%20abstract%20quantum%20particles%20visualization%2C%20professional%20academic%20layout%2C%20light%20background%20with%20blue%20and%20purple%20accents%2C%20educational%20scientific%20book&width=300&height=400&seq=2&orientation=portrait",
    },
    {
      id: 3,
      titre: "Histoire de l'Art Contemporain",
      auteur: "Claire Moreau",
      matiere: "Arts",
      niveau: "Licence",
      disponibleHorsLigne: true,
      image:
        "https://readdy.ai/api/search-image?query=Contemporary%20art%20history%20book%20with%20elegant%20cover%2C%20featuring%20minimalist%20design%2C%20soft%20color%20palette%2C%20artistic%20elements%2C%20professional%20academic%20layout%2C%20educational%20art%20textbook%20with%20clean%20background&width=300&height=400&seq=3&orientation=portrait",
    },
    {
      id: 4,
      titre: "Programmation en Python",
      auteur: "Thomas Lefevre",
      matiere: "Informatique",
      niveau: "Débutant",
      disponibleHorsLigne: true,
      image:
        "https://readdy.ai/api/search-image?query=Python%20programming%20textbook%20with%20clean%20modern%20cover%20design%2C%20code%20visualization%2C%20tech-inspired%20layout%2C%20light%20background%20with%20blue%20accents%2C%20professional%20educational%20computer%20science%20book&width=300&height=400&seq=4&orientation=portrait",
    },
  ];


  return (
    <div className='mt-20'>

      <div className="justify-center items-center rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
      onClick={goToUploadPage}>
                    <div className=" ml-125 flex items-center">
                      <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                        <i className="fas fa-download text-xl"></i>
                      </div>
                      <h4 className="ml-3 text-lg font-medium text-gray-900">
                        Uploader un document
                      </h4>
                    </div>
                    
      </div>


    <div className="mt-12 ml-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Vos Livres
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {livresRecommandes.map((livre) => (
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
                        <h3 className="text-lg font-semibold text-gray-900">
                          {livre.titre}
                        </h3>
                        <p className="text-sm text-gray-600">{livre.auteur}</p>
                        <div className="mt-2 flex justify-between items-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                            {livre.matiere}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {livre.niveau}
                          </span>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          {livre.disponibleHorsLigne ? (
                            <span className="inline-flex items-center text-xs text-green-600">
                              <i className="fas fa-check-circle mr-1"></i>{" "}
                              Disponible hors ligne
                            </span>
                          ) : (
                            <span className="inline-flex items-center text-xs text-gray-500">
                              <i className="fas fa-cloud mr-1"></i> En ligne
                              uniquement
                            </span>
                          )}
                          <button className="whitespace-nowrap !rounded-button cursor-pointer text-indigo-600 hover:text-indigo-800">
                            <i className="fas fa-download"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
  </div>
  )
}

export default BibliothequeProf
