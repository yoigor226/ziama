import React from 'react'

const CategorieSection = () => {
  return (
    <section className="mt-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            Nos Catégories
          </h2>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {[
              {
                title: "Femmes",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%20woman%20in%20stylish%20modern%20outfit%20with%20neutral%20background%2C%20professional%20fashion%20photography%2C%20full%20body%20shot%20showing%20complete%20outfit%2C%20high%20end%20fashion%20editorial%20style&width=600&height=800&seq=2&orientation=portrait",
              },
              {
                title: "Hommes",
                image:
                  "https://readdy.ai/api/search-image?query=stylish%20man%20in%20modern%20casual%20outfit%20with%20neutral%20background%2C%20professional%20fashion%20photography%2C%20full%20body%20shot%20showing%20complete%20outfit%2C%20high%20end%20fashion%20editorial%20style&width=600&height=800&seq=3&orientation=portrait",
              },
              {
                title: "Accessoires",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20fashion%20accessories%20including%20bags%2C%20jewelry%2C%20and%20watches%20arranged%20elegantly%20on%20neutral%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style&width=600&height=800&seq=4&orientation=portrait",
              },
              {
                title: "Nouveautés",
                image:
                  "https://readdy.ai/api/search-image?query=trendy%20fashion%20outfit%20with%20latest%20seasonal%20colors%20and%20styles%20on%20neutral%20background%2C%20professional%20fashion%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%20showcasing%20new%20collection&width=600&height=800&seq=5&orientation=portrait",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg h-40 cursor-pointer"
              >
                <div className="absolute inset-0 bg-red/300 group-hover:bg-red/40 transition duration-300 z-10"></div>
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                  <h3 className="text-xl font-semibold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explorer la collection
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default CategorieSection
