import React from 'react'

import { useNavigate } from 'react-router-dom';

const VideothequeProf = () => {

  const navigate = useNavigate();
  
  const goToUploadPage = () => {
    navigate('/uploadVideos');
  };

  // Données pour les vidéos éducatives
  const videosEducatives = [
    {
      id: 1,
      titre: "Les bases de l'algèbre linéaire",
      duree: "45 min",
      vues: 1240,
      image:
        "https://readdy.ai/api/search-image?query=Linear%20algebra%20video%20thumbnail%20with%20mathematical%20equations%20and%20geometric%20visualizations%2C%20professional%20educational%20design%2C%20clean%20light%20background%2C%20modern%20academic%20content%20preview&width=400&height=225&seq=8&orientation=landscape",
    },
    {
      id: 2,
      titre: "Introduction à la philosophie de Kant",
      duree: "32 min",
      vues: 890,
      image:
        "https://readdy.ai/api/search-image?query=Philosophy%20video%20thumbnail%20featuring%20Kant%20portrait%20and%20philosophical%20concepts%20visualization%2C%20professional%20educational%20design%2C%20elegant%20light%20background%2C%20academic%20content%20preview&width=400&height=225&seq=9&orientation=landscape",
    },
    {
      id: 3,
      titre: "Techniques avancées de programmation web",
      duree: "58 min",
      vues: 2150,
      image:
        "https://readdy.ai/api/search-image?query=Web%20programming%20video%20thumbnail%20with%20code%20snippets%20and%20interface%20design%20elements%2C%20professional%20tech%20educational%20content%2C%20clean%20light%20background%20with%20blue%20accents%2C%20modern%20development%20tutorial%20preview&width=400&height=225&seq=10&orientation=landscape",
    },

    {
      id: 1,
      titre: "Les bases de l'algèbre linéaire",
      duree: "45 min",
      vues: 1240,
      image:
        "https://readdy.ai/api/search-image?query=Linear%20algebra%20video%20thumbnail%20with%20mathematical%20equations%20and%20geometric%20visualizations%2C%20professional%20educational%20design%2C%20clean%20light%20background%2C%20modern%20academic%20content%20preview&width=400&height=225&seq=8&orientation=landscape",
    },
    {
      id: 2,
      titre: "Introduction à la philosophie de Kant",
      duree: "32 min",
      vues: 890,
      image:
        "https://readdy.ai/api/search-image?query=Philosophy%20video%20thumbnail%20featuring%20Kant%20portrait%20and%20philosophical%20concepts%20visualization%2C%20professional%20educational%20design%2C%20elegant%20light%20background%2C%20academic%20content%20preview&width=400&height=225&seq=9&orientation=landscape",
    },
    {
      id: 3,
      titre: "Techniques avancées de programmation web",
      duree: "58 min",
      vues: 2150,
      image:
        "https://readdy.ai/api/search-image?query=Web%20programming%20video%20thumbnail%20with%20code%20snippets%20and%20interface%20design%20elements%2C%20professional%20tech%20educational%20content%2C%20clean%20light%20background%20with%20blue%20accents%2C%20modern%20development%20tutorial%20preview&width=400&height=225&seq=10&orientation=landscape",
    },

    {
      id: 1,
      titre: "Les bases de l'algèbre linéaire",
      duree: "45 min",
      vues: 1240,
      image:
        "https://readdy.ai/api/search-image?query=Linear%20algebra%20video%20thumbnail%20with%20mathematical%20equations%20and%20geometric%20visualizations%2C%20professional%20educational%20design%2C%20clean%20light%20background%2C%20modern%20academic%20content%20preview&width=400&height=225&seq=8&orientation=landscape",
    },
    {
      id: 2,
      titre: "Introduction à la philosophie de Kant",
      duree: "32 min",
      vues: 890,
      image:
        "https://readdy.ai/api/search-image?query=Philosophy%20video%20thumbnail%20featuring%20Kant%20portrait%20and%20philosophical%20concepts%20visualization%2C%20professional%20educational%20design%2C%20elegant%20light%20background%2C%20academic%20content%20preview&width=400&height=225&seq=9&orientation=landscape",
    },
    {
      id: 3,
      titre: "Techniques avancées de programmation web",
      duree: "58 min",
      vues: 2150,
      image:
        "https://readdy.ai/api/search-image?query=Web%20programming%20video%20thumbnail%20with%20code%20snippets%20and%20interface%20design%20elements%2C%20professional%20tech%20educational%20content%2C%20clean%20light%20background%20with%20blue%20accents%2C%20modern%20development%20tutorial%20preview&width=400&height=225&seq=10&orientation=landscape",
    },

    {
      id: 1,
      titre: "Les bases de l'algèbre linéaire",
      duree: "45 min",
      vues: 1240,
      image:
        "https://readdy.ai/api/search-image?query=Linear%20algebra%20video%20thumbnail%20with%20mathematical%20equations%20and%20geometric%20visualizations%2C%20professional%20educational%20design%2C%20clean%20light%20background%2C%20modern%20academic%20content%20preview&width=400&height=225&seq=8&orientation=landscape",
    },
    {
      id: 2,
      titre: "Introduction à la philosophie de Kant",
      duree: "32 min",
      vues: 890,
      image:
        "https://readdy.ai/api/search-image?query=Philosophy%20video%20thumbnail%20featuring%20Kant%20portrait%20and%20philosophical%20concepts%20visualization%2C%20professional%20educational%20design%2C%20elegant%20light%20background%2C%20academic%20content%20preview&width=400&height=225&seq=9&orientation=landscape",
    },
    {
      id: 3,
      titre: "Techniques avancées de programmation web",
      duree: "58 min",
      vues: 2150,
      image:
        "https://readdy.ai/api/search-image?query=Web%20programming%20video%20thumbnail%20with%20code%20snippets%20and%20interface%20design%20elements%2C%20professional%20tech%20educational%20content%2C%20clean%20light%20background%20with%20blue%20accents%2C%20modern%20development%20tutorial%20preview&width=400&height=225&seq=10&orientation=landscape",
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
                        Uploader une video
                      </h4>
                    </div>
                    
      </div>


      <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Vidéos éducatives populaires
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {videosEducatives.map((video) => (
                    <div
                      key={video.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={video.image}
                          alt={video.titre}
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white bg-opacity-75 rounded-full p-3">
                            <i className="fas fa-play text-indigo-600 text-xl"></i>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                          {video.duree}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {video.titre}
                        </h3>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <i className="fas fa-eye mr-1"></i> {video.vues} vues
                        </div>
                        <div className="mt-4 flex justify-end">
                          <button className="whitespace-nowrap !rounded-button cursor-pointer inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                            Regarder
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

export default VideothequeProf
