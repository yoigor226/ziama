import React, { useState } from 'react'
import emailjs from 'emailjs-com';

const Rdv = () => {

    const [formData, setFormData] = useState({
    nomComplet: '',
    email: '',
    telephone: '',
    service: '',
    date: '',
    heure: '',
    message: '',
  });

  const services = [
    { id: 'audit', nom: 'Audit Énergétique' },
    { id: 'management', nom: 'Management de l\'Énergie' },
    { id: 'ingenierie', nom: 'Ingénierie Électrique' },
    { id: 'energies', nom: 'Énergies Renouvelables' },
    { id: 'formations', nom: 'Formations Pratiques' },
  ];

  const heuresDisponibles = [
    '08:00', '09:00', '10:00', '11:00',
    '14:00', '15:00', '16:00', '17:00'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_aphpa0d', // Remplace par ton Service ID
      'template_rlvhfb6', // Remplace par ton Template ID
      formData,
      'fWPtr8A3O2GR0zbA5' // Remplace par ton User ID
    )
    .then((result) => {
      console.log(result.text);
      alert(`Merci, ${formData.nomComplet}! Votre rendez-vous pour ${formData.service} le ${formData.date} à ${formData.heure} a été enregistré. Nous vous contacterons bientôt.`);
      setFormData({
        
        nomComplet: '',
        email: '',
        telephone: '',
        service: '',
        date: '',
        heure: '',
        message: '',
      });
    }, (error) => {
      console.log(error.text);
      alert("Une erreur est survenue, veuillez réessayer.");
    });
  };


  return (
    <div id='rdv'  className='mt-2 w-full p-2 pb-2 bg-green-400'>
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Prendre un Rendez-vous</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="nomComplet" className="block text-sm font-medium text-gray-700 mb-1">
                Nom Complet *
                </label>
                <input
                type="text"
                id="nomComplet"
                name="nomComplet"
                value={formData.nomComplet}
                onChange={handleChange}
                placeholder='Nom & Prenom'
                className="w-full px-4 py-2  bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
                </label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Votre@gmail.com'
                className="w-full px-4 py-2  bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                Téléphone *
                </label>
                <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full px-4 py-2  bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+226 XX XX XX XX"
                required
                />
            </div>
            <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Service *
                </label>
                <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2  bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                >
                <option value="">Sélectionnez un service</option>
                {services.map(service => (
                    <option key={service.id} value={service.nom}>{service.nom}</option>
                ))}
                </select>
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Date *
                </label>
                <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2  bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            </div>
            <div>
                <label htmlFor="heure" className="block text-sm font-medium text-gray-700 mb-1">
                Heure *
                </label>
                <select
                id="heure"
                name="heure"
                value={formData.heure}
                onChange={handleChange}
                className="w-full px-4 py-2  bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                >
                <option value="">Sélectionnez une heure</option>
                {heuresDisponibles.map(heure => (
                    <option key={heure} value={heure}>{heure}</option>
                ))}
                </select>
            </div>
            </div>

            <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message (facultatif)
            </label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2  bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Décrivez brièvement votre demande..."
            />
            </div>

            <div className="text-center">
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
                Prendre Rendez-vous
            </button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Rdv
