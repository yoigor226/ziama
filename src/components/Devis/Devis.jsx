import React,  { useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

const Devis = () => {
  const [formData, setFormData] = useState({
    nomComplet: '',
    telephone: '',
    email: '',
    serviceSouhaite: '',
    descriptionProjet: '',
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
    // Logique pour envoyer les données du formulaire
    console.log(formData);
  };

  return (
    <div>
        
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">

        <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center bg-green-500 rounded-lg"
      >
        <Typography variant="h3" color="white">
          ZIAMA ENGINEERING
        </Typography>
      </CardHeader>
 
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="nomComplet" className="block text-sm font-medium text-gray-700 mb-1">
              Nom & Prenom *
            </label>
            <input
              type="text"
              id="nomComplet"
              name="nomComplet"
              placeholder="Votre nom complet"
              value={formData.nomComplet}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-200  rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone *
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              placeholder="+226 XX XX XX XX"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>

          
          <input
            type="email"
            id="email"
            name="email"
            placeholder="votre@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="serviceSouhaite" className="block text-sm font-medium text-gray-700 mb-1">
            Service Souhaité *
          </label>
          <select
            id="serviceSouhaite"
            name="serviceSouhaite"
            value={formData.serviceSouhaite}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            <option value="">Sélectionnez un service</option>
            <option value="audit">Audit Énergétique</option>
            <option value="management">Management de l'Énergie</option>
            <option value="ingenierie">Ingénierie Électrique</option>
            <option value="energies">Énergies Renouvelables</option>
            <option value="formations">Formations Pratiques</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="descriptionProjet" className="block text-sm font-medium text-gray-700 mb-1">
            Description du Projet *
          </label>
          <textarea
            id="descriptionProjet"
            name="descriptionProjet"
            placeholder="Décrivez votre projet et vos besoins en détail... (max 500 caractères)"
            value={formData.descriptionProjet}
            onChange={handleChange}
            maxLength="500"
            className="w-full px-4 py-2 bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="4"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            {formData.descriptionProjet.length}/500 caractères
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
        >
          <i className="fas fa-paper-plane mr-2"></i>
          Envoyer la Demande
        </button>
        </form>
    </div>

</div>
  );
}

export default Devis
