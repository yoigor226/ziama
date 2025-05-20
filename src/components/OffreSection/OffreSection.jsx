import React, {useState} from 'react'
import { Bars3Icon, BellIcon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

const OffreSection = () => {

  const [selectedProduct, setSelectedProduct] = useState<
    null | (typeof featuredProducts)[0]
  >(null);

  return (
    <section className="mt-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-red-600">Offres du Jour</h2>
            <div className="flex items-center space-x-2 text-red-600">
              <i className="fas fa-clock"></i>
              <span>Se termine dans: 12:45:30</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              {
                name: "Ensemble d'Été",
                price: "49,99 €",
                oldPrice: "89,99 €",
                discount: "-45%",
                image:
                  "https://readdy.ai/api/search-image?query=summer%20fashion%20outfit%20set%20displayed%20elegantly%20on%20neutral%20background%20professional%20fashion%20photography%20with%20soft%20lighting%20high%20end%20fashion%20editorial%20style%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=10&orientation=portrait",
              },
              {
                name: "Sac Designer",
                price: "199,99 €",
                oldPrice: "299,99 €",
                discount: "-33%",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20designer%20handbag%20on%20minimalist%20background%20professional%20product%20photography%20with%20dramatic%20lighting%20high%20end%20fashion%20editorial%20style%20detailed%20leather%20texture%20visible&width=500&height=600&seq=11&orientation=portrait",
              },
              {
                name: "Montre Luxe",
                price: "299,99 €",
                oldPrice: "499,99 €",
                discount: "-40%",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20watch%20on%20minimal%20dark%20background%20professional%20product%20photography%20with%20dramatic%20lighting%20high%20end%20fashion%20editorial%20style%20detailed%20metal%20texture%20visible&width=500&height=600&seq=12&orientation=portrait",
              },
              {
                name: "Robe Soirée",
                price: "129,99 €",
                oldPrice: "259,99 €",
                discount: "-50%",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%20evening%20dress%20on%20mannequin%20with%20dark%20background%20professional%20fashion%20photography%20with%20dramatic%20lighting%20high%20end%20fashion%20editorial%20style%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=13&orientation=portrait",
              },
            ].map((product, index) => (
              <div key={index} onClick={() => setSelectedProduct(product)} className="bg-white rounded-lg shadow-sm group w-[200px]">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {product.discount}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-red-500 font-bold">
                      {product.price}
                    </span>
                    <span className="text-gray-400 text-sm line-through">
                      {product.oldPrice}
                    </span>
                  </div>
                  <div className='flex'>
                  <button className="w-full mt-4 bg-red-600 text-white px-4 py-2 font-medium hover:bg-gray-800 transition duration-300 !rounded-button whitespace-nowrap">
                    Acheter
                  </button>
                  <button
                    type="button"
                    className="relative rounded-full ml-4 bg-red-1000 p-1 text-gray-400 hover:text-red focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                    >
                        <span className="absolute -inset-1.5" />
                        
                        <ShoppingCartIcon className="h-6 w-6" />
                    </button>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10 !rounded-button whitespace-nowrap"
              >
                <i className="fas fa-times text-xl"></i>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div className="relative">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-[500px] object-cover object-top rounded-lg"
                  />
                  {selectedProduct.isNew && (
                    <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      NOUVEAU
                    </span>
                  )}
                  {selectedProduct.isPromo && (
                    <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      PROMO
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <h2 className="text-3xl font-bold mb-4">
                    {selectedProduct.name}
                  </h2>
                  <div className="flex items-center space-x-2 mb-6">
                    <span className="text-2xl font-bold text-gray-900">
                      {selectedProduct.price}
                    </span>
                    {selectedProduct.isPromo &&
                      selectedProduct.originalPrice && (
                        <span className="text-xl text-gray-500 line-through">
                          {selectedProduct.originalPrice}
                        </span>
                      )}
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold mb-2">Description</h3>
                    <p className="text-gray-600">
                      Un vêtement élégant et tendance qui s'adapte à toutes les
                      occasions. Fabriqué avec des matériaux de haute qualité
                      pour un confort optimal.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold mb-2">Tailles disponibles</h3>
                    <div className="flex space-x-2">
                      {["XS", "S", "M", "L", "XL"].map((size) => (
                        <button
                          key={size}
                          className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:border-pink-600 hover:text-pink-600 transition-colors !rounded-button whitespace-nowrap"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold mb-2">Couleurs disponibles</h3>
                    <div className="flex space-x-2">
                      {[
                        "bg-black",
                        "bg-gray-400",
                        "bg-pink-600",
                        "bg-blue-600",
                      ].map((color) => (
                        <button
                          key={color}
                          className={`w-8 h-8 rounded-full ${color} border-2 border-white shadow-md hover:scale-110 transition-transform !rounded-button whitespace-nowrap`}
                        ></button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto space-y-4">
                    <button className="w-full bg-gray-900 hover:bg-black text-white py-3 rounded-md transition-colors flex items-center justify-center space-x-2 !rounded-button whitespace-nowrap">
                      <i className="fas fa-shopping-cart"></i>
                      <span>Ajouter au panier</span>
                    </button>
                    <button className="w-full border border-gray-300 hover:border-pink-600 hover:text-pink-600 py-3 rounded-md transition-colors flex items-center justify-center space-x-2 !rounded-button whitespace-nowrap">
                      <i className="far fa-heart"></i>
                      <span>Ajouter aux favoris</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )};
      </section>
  )
}

export default OffreSection
