import React from 'react'

const Location = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Notre Localisation</h2>
      <div className="w-full h-96">
        <iframe
          title="Ouagadougou Location"
          src="https://www.google.com/maps/embed?v=1&q=Ouagadougou,+Burkina+Faso&key=YOUR_API_KEY&maptype=roadmap"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default Location
