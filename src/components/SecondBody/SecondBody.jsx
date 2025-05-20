import React from 'react'
import '/src/index.css'
import BestSales from '../BestSales/BestSales'
const SecondBody = () => {

    
  return (
    <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
            Nos Produits
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-6">
            {[
              {
                name: "Robe Élégante",
                price: "89,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%20dress%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=6&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chemise Casual",
                price: "59,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=casual%20shirt%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=7&orientation=portrait",
                isNew: false,
                isPromo: true,
                oldPrice: "79,99 €",
              },
              {
                name: "Sac à Main Premium",
                price: "129,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20handbag%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20leather%20texture%20visible&width=500&height=600&seq=8&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chaussures Tendance",
                price: "99,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=stylish%20shoes%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20texture%20visible&width=500&height=600&seq=9&orientation=portrait",
                isNew: false,
                isPromo: false,
              },

              {
                name: "Robe Élégante",
                price: "89,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%20dress%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=6&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chemise Casual",
                price: "59,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=casual%20shirt%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=7&orientation=portrait",
                isNew: false,
                isPromo: true,
                oldPrice: "79,99 €",
              },
              {
                name: "Sac à Main Premium",
                price: "129,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20handbag%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20leather%20texture%20visible&width=500&height=600&seq=8&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chaussures Tendance",
                price: "99,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=stylish%20shoes%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20texture%20visible&width=500&height=600&seq=9&orientation=portrait",
                isNew: false,
                isPromo: false,
              },

              {
                name: "Robe Élégante",
                price: "89,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%20dress%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=6&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chemise Casual",
                price: "59,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=casual%20shirt%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=7&orientation=portrait",
                isNew: false,
                isPromo: true,
                oldPrice: "79,99 €",
              },
              {
                name: "Sac à Main Premium",
                price: "129,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20handbag%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20leather%20texture%20visible&width=500&height=600&seq=8&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chaussures Tendance",
                price: "99,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=stylish%20shoes%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20texture%20visible&width=500&height=600&seq=9&orientation=portrait",
                isNew: false,
                isPromo: false,
              },

              {
                name: "Robe Élégante",
                price: "89,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%20dress%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=6&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chemise Casual",
                price: "59,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=casual%20shirt%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=7&orientation=portrait",
                isNew: false,
                isPromo: true,
                oldPrice: "79,99 €",
              },
              {
                name: "Sac à Main Premium",
                price: "129,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20handbag%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20leather%20texture%20visible&width=500&height=600&seq=8&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chaussures Tendance",
                price: "99,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=stylish%20shoes%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20texture%20visible&width=500&height=600&seq=9&orientation=portrait",
                isNew: false,
                isPromo: false,
              },

              {
                name: "Robe Élégante",
                price: "89,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%20dress%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=6&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chemise Casual",
                price: "59,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=casual%20shirt%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=7&orientation=portrait",
                isNew: false,
                isPromo: true,
                oldPrice: "79,99 €",
              },
              {
                name: "Sac à Main Premium",
                price: "129,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20handbag%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20leather%20texture%20visible&width=500&height=600&seq=8&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chaussures Tendance",
                price: "99,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=stylish%20shoes%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20texture%20visible&width=500&height=600&seq=9&orientation=portrait",
                isNew: false,
                isPromo: false,
              },

              {
                name: "Robe Élégante",
                price: "89,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%20dress%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=6&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chemise Casual",
                price: "59,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=casual%20shirt%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=7&orientation=portrait",
                isNew: false,
                isPromo: true,
                oldPrice: "79,99 €",
              },
              {
                name: "Sac à Main Premium",
                price: "129,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20handbag%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20leather%20texture%20visible&width=500&height=600&seq=8&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chaussures Tendance",
                price: "99,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=stylish%20shoes%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20texture%20visible&width=500&height=600&seq=9&orientation=portrait",
                isNew: false,
                isPromo: false,
              },

              {
                name: "Robe Élégante",
                price: "89,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%20dress%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=6&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chemise Casual",
                price: "59,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=casual%20shirt%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=7&orientation=portrait",
                isNew: false,
                isPromo: true,
                oldPrice: "79,99 €",
              },
              {
                name: "Sac à Main Premium",
                price: "129,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20handbag%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20leather%20texture%20visible&width=500&height=600&seq=8&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chaussures Tendance",
                price: "99,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=stylish%20shoes%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20texture%20visible&width=500&height=600&seq=9&orientation=portrait",
                isNew: false,
                isPromo: false,
              },

              {
                name: "Robe Élégante",
                price: "89,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%20dress%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=6&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chemise Casual",
                price: "59,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=casual%20shirt%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=7&orientation=portrait",
                isNew: false,
                isPromo: true,
                oldPrice: "79,99 €",
              },
              {
                name: "Sac à Main Premium",
                price: "129,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20handbag%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20leather%20texture%20visible&width=500&height=600&seq=8&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chaussures Tendance",
                price: "99,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=stylish%20shoes%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20texture%20visible&width=500&height=600&seq=9&orientation=portrait",
                isNew: false,
                isPromo: false,
              },

              {
                name: "Robe Élégante",
                price: "89,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%20dress%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=6&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chemise Casual",
                price: "59,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=casual%20shirt%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=7&orientation=portrait",
                isNew: false,
                isPromo: true,
                oldPrice: "79,99 €",
              },
              {
                name: "Sac à Main Premium",
                price: "129,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20handbag%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20leather%20texture%20visible&width=500&height=600&seq=8&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chaussures Tendance",
                price: "99,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=stylish%20shoes%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20texture%20visible&width=500&height=600&seq=9&orientation=portrait",
                isNew: false,
                isPromo: false,
              },

              {
                name: "Robe Élégante",
                price: "89,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%20dress%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=6&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chemise Casual",
                price: "59,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=casual%20shirt%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=7&orientation=portrait",
                isNew: false,
                isPromo: true,
                oldPrice: "79,99 €",
              },
              {
                name: "Sac à Main Premium",
                price: "129,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20handbag%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20leather%20texture%20visible&width=500&height=600&seq=8&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chaussures Tendance",
                price: "99,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=stylish%20shoes%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20texture%20visible&width=500&height=600&seq=9&orientation=portrait",
                isNew: false,
                isPromo: false,
              },

              {
                name: "Robe Élégante",
                price: "89,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%20dress%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=6&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chemise Casual",
                price: "59,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=casual%20shirt%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=7&orientation=portrait",
                isNew: false,
                isPromo: true,
                oldPrice: "79,99 €",
              },
              {
                name: "Sac à Main Premium",
                price: "129,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20handbag%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20leather%20texture%20visible&width=500&height=600&seq=8&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chaussures Tendance",
                price: "99,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=stylish%20shoes%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20texture%20visible&width=500&height=600&seq=9&orientation=portrait",
                isNew: false,
                isPromo: false,
              },

              {
                name: "Robe Élégante",
                price: "89,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%20dress%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=6&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chemise Casual",
                price: "59,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=casual%20shirt%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=7&orientation=portrait",
                isNew: false,
                isPromo: true,
                oldPrice: "79,99 €",
              },
              {
                name: "Sac à Main Premium",
                price: "129,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20handbag%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20leather%20texture%20visible&width=500&height=600&seq=8&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chaussures Tendance",
                price: "99,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=stylish%20shoes%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20texture%20visible&width=500&height=600&seq=9&orientation=portrait",
                isNew: false,
                isPromo: false,
              },

              {
                name: "Robe Élégante",
                price: "89,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%20dress%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=6&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chemise Casual",
                price: "59,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=casual%20shirt%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=7&orientation=portrait",
                isNew: false,
                isPromo: true,
                oldPrice: "79,99 €",
              },
              {
                name: "Sac à Main Premium",
                price: "129,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20handbag%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20leather%20texture%20visible&width=500&height=600&seq=8&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chaussures Tendance",
                price: "99,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=stylish%20shoes%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20texture%20visible&width=500&height=600&seq=9&orientation=portrait",
                isNew: false,
                isPromo: false,
              },

              {
                name: "Robe Élégante",
                price: "89,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%20dress%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=6&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chemise Casual",
                price: "59,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=casual%20shirt%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=7&orientation=portrait",
                isNew: false,
                isPromo: true,
                oldPrice: "79,99 €",
              },
              {
                name: "Sac à Main Premium",
                price: "129,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20handbag%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20leather%20texture%20visible&width=500&height=600&seq=8&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chaussures Tendance",
                price: "99,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=stylish%20shoes%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20texture%20visible&width=500&height=600&seq=9&orientation=portrait",
                isNew: false,
                isPromo: false,
              },

              {
                name: "Robe Élégante",
                price: "89,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%20dress%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=6&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chemise Casual",
                price: "59,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=casual%20shirt%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=7&orientation=portrait",
                isNew: false,
                isPromo: true,
                oldPrice: "79,99 €",
              },
              {
                name: "Sac à Main Premium",
                price: "129,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20handbag%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20leather%20texture%20visible&width=500&height=600&seq=8&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chaussures Tendance",
                price: "99,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=stylish%20shoes%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20texture%20visible&width=500&height=600&seq=9&orientation=portrait",
                isNew: false,
                isPromo: false,
              },

              {
                name: "Robe Élégante",
                price: "89,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%20dress%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=6&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chemise Casual",
                price: "59,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=casual%20shirt%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=7&orientation=portrait",
                isNew: false,
                isPromo: true,
                oldPrice: "79,99 €",
              },
              {
                name: "Sac à Main Premium",
                price: "129,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20handbag%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20leather%20texture%20visible&width=500&height=600&seq=8&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chaussures Tendance",
                price: "99,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=stylish%20shoes%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20texture%20visible&width=500&height=600&seq=9&orientation=portrait",
                isNew: false,
                isPromo: false,
              },

              {
                name: "Robe Élégante",
                price: "89,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%20dress%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=6&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chemise Casual",
                price: "59,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=casual%20shirt%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=7&orientation=portrait",
                isNew: false,
                isPromo: true,
                oldPrice: "79,99 €",
              },
              {
                name: "Sac à Main Premium",
                price: "129,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20handbag%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20leather%20texture%20visible&width=500&height=600&seq=8&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chaussures Tendance",
                price: "99,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=stylish%20shoes%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20texture%20visible&width=500&height=600&seq=9&orientation=portrait",
                isNew: false,
                isPromo: false,
              },

              {
                name: "Robe Élégante",
                price: "89,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=elegant%20dress%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=6&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chemise Casual",
                price: "59,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=casual%20shirt%20on%20mannequin%20with%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20fabric%20texture%20visible&width=500&height=600&seq=7&orientation=portrait",
                isNew: false,
                isPromo: true,
                oldPrice: "79,99 €",
              },
              {
                name: "Sac à Main Premium",
                price: "129,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=luxury%20handbag%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20leather%20texture%20visible&width=500&height=600&seq=8&orientation=portrait",
                isNew: true,
                isPromo: false,
              },
              {
                name: "Chaussures Tendance",
                price: "99,99 €",
                image:
                  "https://readdy.ai/api/search-image?query=stylish%20shoes%20on%20neutral%20background%2C%20professional%20fashion%20product%20photography%20with%20soft%20lighting%2C%20high%20end%20fashion%20editorial%20style%2C%20detailed%20texture%20visible&width=500&height=600&seq=9&orientation=portrait",
                isNew: false,
                isPromo: false,
              },
            ].map((product, index) => (
              <div key={index} className="group w-[200px]">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                      Nouveau
                    </span>
                  )}
                  {product.isPromo && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                      Promo
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button
                      // onClick={handleAddToCart}
                      className="bg-white text-gray-900 px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 font-medium text-sm cursor-pointer !rounded-button whitespace-nowrap"
                    >
                      Ajouter au panier
                    </button>
                    
                  </div>
                </div>
                <h3 className="font-medium mb-1">{product.name}</h3>
                <div className="flex items-center space-betwen">
                  {product.isPromo ? (
                    <>
                      <span className="text-red-500 font-medium">
                        {product.price}
                      </span>
                      <span className="ml-2 text-gray-500 text-sm line-through">
                        {product.oldPrice}
                      </span>
                      
                    </>
                  ) : (
                    <span className="font-medium">{product.price}</span>
                  )}
                  <button className="bg-red-500 h-[30px] w-[60px] rounded-10 ml-8 text-white px- py- font-medium hover:bg-gray-100 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
              Acheter 
            </button>
                </div>
                
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
              Voir Plus de Produits
            </button>
          </div>
        </div>
      </section>
  )
}

export default SecondBody
