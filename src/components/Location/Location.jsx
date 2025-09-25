import React from 'react'

const Location = () => {

  const latitude = 12.32958;
  const longitude = -1.5118033;

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Notre Localisation</h2>
      <div className="w-full h-96">
        <iframe
          title="Ziama Engineering Location"
          src={`https://www.google.com/maps?q=${latitude},${longitude}&output=embed`}
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default Location
