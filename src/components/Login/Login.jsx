import React, {useState} from 'react'

import axios from 'axios';
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const navigate = useNavigate();

    const goToInscriptionPage = () => {
        navigate('/inscription');
    };

    const [formData, setFormData] = useState({
    email: '',
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
        const response = await axios.post('http://localhost:4000/api/user/login', formData);
        console.log('Réponse de l\'API :', response.data.user.role);

        if (response.data.user.role === "étudiant") {
          localStorage.setItem('profEmail', formData.email);
          navigate('/pageEtudiant');
        } else if (response.data.user.role === 'professeur') {
          localStorage.setItem('profEmail', formData.email);
          navigate('/pageProfesseur');
        }
        
        } catch (error) {
        console.error('Erreur lors de l\'envoi des données :', error);
        
        }
    };



    return (
        <div className='flex flex-col items-center min-h-screen bg-gray-50 dark:bg-white'>
            
            

            <div className="w-full max-w-md flex min-h-screen bg-gray-50 dark:bg-white">
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
                Login
                </h1>

                <form onSubmit={handleSubmit}>
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
                    Connexion
                    </button>
                </div>

                <div className="mt-6">
                    <button
                    type="button"
                    className="w-full rounded-md bg-white-600 py-2 px-4 text-white hover:bg-blue-700 dark:hover:bg-blue-800"
                    onClick={goToInscriptionPage}>
                    S'INSCRIRE
                    </button>
                </div>
                </form>

            </div>
            </div>
        </div>
  );

}

export default Login
