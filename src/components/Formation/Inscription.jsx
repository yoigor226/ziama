import React, { useState } from 'react';
import inscri from '../../assets/inscri.jpg';

const Inscription = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    serviceSouhaite: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Ajoute ici la logique pour traiter les données du formulaire
  };

  return (
    <div>
      <div className="mt-8 bg-gray-200 h-screen w-screen">
        <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
          <div
            className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
            style={{ height: '500px' }}
          >
            <div className="flex flex-col w-full md:w-1/2 p-4">
              <div className="flex flex-col flex-1 justify-center mb-8">
                <h1 className="text-4xl text-center font-thin">Inscription</h1>
                <div className="w-full mt-4">
                  <form className="form-horizontal w-3/4 mx-auto" onSubmit={handleSubmit}>
                    <div className="flex flex-col mt-4">
                      <input
                        id="name"
                        type="text"
                        className="flex-grow h-8 px-2 rounded bg-gray-200"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nom & Prenom"
                        required
                      />
                    </div>
                    <div className="flex flex-col mt-4">
                      <input
                        id="email"
                        type="email"
                        className="flex-grow h-8 px-2 rounded bg-gray-200"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="flex flex-col mt-4">
                      <input
                        id="number"
                        type="tel"
                        className="flex-grow h-8 px-2 rounded bg-gray-200"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        placeholder="+226 XX XX XX XX"
                        required
                      />
                    </div>

                    <div className="flex flex-col mt-4">
                      <label htmlFor="serviceSouhaite" className="block text-sm font-medium text-gray-700 mb-1">
                        Formation Souhaitée *
                      </label>
                      <select
                        id="serviceSouhaite"
                        name="serviceSouhaite"
                        value={formData.serviceSouhaite}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      >
                        <option value="">Sélectionnez</option>
                        <option value="audit">Audit Énergétique</option>
                        <option value="autocad">Autocad Électrique</option>
                        <option value="securite">Sécurité Électrique</option>
                        <option value="management">Management de l'Énergie</option>
                        <option value="habilitation">Habilitation Électrique</option>
                        <option value="installation">Installation Électrique BT</option>
                        <option value="automates">Automates Programmables Industriel</option>
                        <option value="rebo">Rebobinage des Machines Électriques</option>
                        <option value="energie">Énergie Solaire: Conception et Réalisation</option>
                        <option value="maintenance">Maintenance des Installations Électriques</option>
                      </select>
                    </div>
                    <div className="flex flex-col mt-8">
                      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                        S'inscrire
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              className="hidden md:block md:w-1/2 rounded-r-lg"
              style={{
                background: `url(${inscri})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
