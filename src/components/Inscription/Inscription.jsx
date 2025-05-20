import React, {useState} from 'react';

import axios from 'axios';
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { useNavigate } from 'react-router-dom';



const Inscription = () => {

    const navigate = useNavigate();

    const goToLoginPage = () => {
        navigate('/login');
    };

    const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    role: 'étudiant', // Valeur par défaut
    filiere: '',
    niveau: 'licence 1', // Valeur par défaut
    specialite: '',
    password: '',
  });
    
      const [showPassword, setShowPassword] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post('http://localhost:4000/api/user/register', formData);
        console.log('Réponse de l\'API :', response.data);

        if (response.status === 201) {
        if (formData.role === 'étudiant') {
          // Dans votre composant de connexion, après une connexion réussie
          
          localStorage.setItem('profEmail', formData.email);
        
          navigate('/pageEtudiant');
        } else if (formData.role === 'professeur') {
          localStorage.setItem('profEmail', formData.email);
          navigate('/pageProfesseur');
        }
      }
        
        } catch (error) {
        console.error('Erreur lors de l\'envoi des données :', error);
        
        }
    };
    
      


  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-50 dark:bg-white'>
            
            <div className="flex items-center mt-8">
              <div className="flex-shrink-0 flex items-center">
                <i className="fas fa-graduation-cap text-indigo-600 text-5xl"></i>
                <span className="mr-4 text-4xl font-bold text-indigo-600">
                  FocusEduc
                </span>
              </div>
            </div>

            <div className="w-full max-w-md flex min-h-screen bg-gray-50 dark:bg-white mt-4">
            <div className="m-auto w-full max-w-md p-6 bg-white dark:bg-gray-900 shadow rounded-lg">
                <h1 className="text-4xl font-semibold text-gray-700 dark:text-white text-center">
                Inscription
                </h1>

                <form onSubmit={handleSubmit}>

                <div className="mt-4">
                    <input
                    id="nom"
                    name="nom"
                    type="text"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="NOM"
                    className="mt-1 px-4 h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                </div>

                <div className="mt-4">
                    <input
                    id="prenom"
                    name="prenom"
                    type="text"
                    value={formData.prenom}
                    onChange={handleChange}
                    placeholder="Prenom (s)"
                    className="mt-1 px-4 h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                </div>

                <div className="mt-4">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="mt-1 px-4 h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                </div>

                <div className="mt-4">
                    <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="mt-1 px-4 h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    >
                    <option value="étudiant">Étudiant</option>
                    <option value="professeur">Professeur</option>
                    </select>
                </div>

                {formData.role === 'étudiant' && (
                    <>
                    <div className="mt-4">
                        <input
                        id="filiere"
                        name="filiere"
                        type="text"
                        value={formData.filiere}
                        onChange={handleChange}
                        placeholder="Filière"
                        className="mt-1 px-4 h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        />
                    </div>

                    <div className="mt-4">
                        <select
                        id="niveau"
                        name="niveau"
                        value={formData.niveau}
                        onChange={handleChange}
                        className="mt-1 px-4 h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        >
                        <option value="licence 1">Licence 1</option>
                        <option value="licence 2">Licence 2</option>
                        <option value="licence 3">Licence 3</option>
                        <option value="master 1">Master 1</option>
                        <option value="master 2">Master 2</option>
                        <option value="doctorat">Doctorat</option>
                        </select>
                    </div>
                    </>
                )}


                {formData.role === 'professeur' && (
                    <>
                        <div className="mt-4">
                            <input
                            id="specialite"
                            name="specialite"
                            type="text"
                            value={formData.specialite}
                            onChange={handleChange}
                            placeholder="Spécialite"
                            className="mt-1 px-4 h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                            />
                        </div>
                    </>
                )}

                <div className="mt-4">
                    <div className="flex items-center">
                    <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="mt-1 px-4 h-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                    <button
                        type="button"
                        className="ml-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                        ) : (
                        <Eye className="w-5 h-5" />
                        )}
                    </button>
                    </div>
                </div>

                <div className="mt-6">
                    <button
                    type="submit"
                    className="w-full rounded-md bg-indigo-600 py-2 px-4 text-white hover:bg-indigo-700 dark:hover:bg-indigo-800"
                    >
                    Soummettre
                    </button>
                </div>

                <div className="mt-6">
                    <button
                    type="button"
                    className="w-full rounded-md bg-white-600 py-2 px-4 text-white hover:bg-blue-700 dark:hover:bg-blue-800"
                    onClick={goToLoginPage}>
                    Se Connecter
                    </button>
                </div>
                </form>

            </div>
            </div>
        </div>
  )
}

export default Inscription
