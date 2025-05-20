import React, {useState} from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const UploadDocument = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
    titre: '',
    url: '',
    poster: '',
    
  });
    
      
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const profEmail = localStorage.getItem('profEmail');
            if (!profEmail) {
                console.error('Email du professeur non trouvé');
                return;
            }

            const response = await axios.post(`https://focuseduc-backend.onrender.com/api/document/save/${profEmail}`, formData);
            console.log('Réponse de l\'API :', response.data);

        if (response.status === 201) {
        
          navigate('/pageProfesseur');
        } else  {
          console.log("Formulaire invalide");
        }
  
        } catch (error) {
        console.error('Erreur lors de l\'envoi des données :', error);
        
        }
    };

  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-50 dark:bg-white'>
                
                
    
                <div className="w-full max-w-md flex min-h-screen bg-gray-50 dark:bg-white mt-4">
                <div className="m-auto w-full max-w-md p-6 bg-white dark:bg-gray-900 shadow rounded-lg">
                    
                    <div className="flex items-center ml-20 mb-4">
                        <div className="flex-shrink-0 flex items-center">
                            <i className="fas fa-graduation-cap text-indigo-600 text-5xl"></i>
                            <span className="mr-4 text-4xl font-bold text-indigo-600">
                            FocusEduc
                            </span>
                        </div>
                    </div>

                    <h1 className="text-4xl font-semibold text-gray-700 dark:text-white text-center">
                        UploadDodument
                    </h1>
    
                    <form onSubmit={handleSubmit}>
    
                    <div className="mt-4">
                        <input
                        id="titre"
                        name="titre"
                        type="text"
                        value={formData.titre}
                        onChange={handleChange}
                        placeholder="Titre"
                        className="mt-1 px-4 h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        />
                    </div>
    
                    <div className="mt-4">
                        <input
                        id="poster"
                        name="poster"
                        type="text"
                        value={formData.poster}
                        onChange={handleChange}
                        placeholder="Cover URL"  
                        className="mt-1 px-4 h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        />
                    </div>
    
                    <div className="mt-4">
                        <input
                        id="url"
                        name="url"
                        type="text"
                        value={formData.url}
                        onChange={handleChange}
                        placeholder="Document URL"
                        className="mt-1 px-4 h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        />
                    </div>
    
    
                    <div className="mt-6">
                        <button
                        type="submit"
                        className="w-full rounded-md bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700 dark:hover:bg-indigo-800"
                        >
                        Uploader
                        </button>
                    </div>
                    </form>
    
                </div>
                </div>
            </div>
  )
}

export default UploadDocument
