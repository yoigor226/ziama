import React from 'react'
import * as echarts from "echarts";


const TableauBordProf = () => {

    // Initialisation du graphique de progression
  React.useEffect(() => {
    
      const chartDom = document.getElementById("progression-chart");
      if (chartDom) {
        const myChart = echarts.init(chartDom);
        const option = {
          animation: false,
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: ["Mathématiques", "Physique", "Informatique", "Langues"],
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
              "Semaine 1",
              "Semaine 2",
              "Semaine 3",
              "Semaine 4",
              "Semaine 5",
            ],
          },
          yAxis: {
            type: "value",
            max: 100,
          },
          series: [
            {
              name: "Mathématiques",
              type: "line",
              data: [30, 45, 62, 78, 85],
            },
            {
              name: "Physique",
              type: "line",
              data: [25, 40, 55, 65, 70],
            },
            {
              name: "Informatique",
              type: "line",
              data: [40, 55, 65, 80, 90],
            },
            {
              name: "Langues",
              type: "line",
              data: [50, 60, 70, 75, 80],
            },
          ],
        };
        myChart.setOption(option);
        // Nettoyer le graphique lors du démontage
        return () => {
          myChart.dispose();
        };
      }
    
  });
  return (
    <div className='mt-16'>
              <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
                <div className="px-4 py-5 sm:px-6">
                  <h2 className="text-4xl font-bold text-gray-900 text-center">
                    Tableau de Bord
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white shadow rounded-lg p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                      <i className="fas fa-video text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                       Vidéos Publiés
                      </h3>
                      <p className="text-3xl font-bold text-indigo-600">124</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow rounded-lg p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-green-100 text-green-600">
                      <i className="fas fa-book-open text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Documents publiés
                      </h3>
                      <p className="text-3xl font-bold text-green-600">18</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow rounded-lg p-6">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                      <i className="fas fa-tasks text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Devoirs non corrigés
                      </h3>
                      <p className="text-3xl font-bold text-yellow-600">7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white shadow rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Mon programme de la Semaine
                  </h3>
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Cours
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Classe
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Statut
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Physique
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            IC3-GSN
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            20 mai 2025
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              En cours
                            </span>
                          </td>

                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button className="whitespace-nowrap !rounded-button cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                      Anciens Programmes
                    </button>
                  </div>
                </div>


                <div className="bg-white shadow rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Devoirs et évaluations
                  </h3>
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Titre
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Date limite
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Statut
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Dissertation sur Voltaire
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            20 mai 2025
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              En cours
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button className="text-indigo-600 hover:text-indigo-900 mr-3 cursor-pointer">
                              <i className="fas fa-eye"></i>
                            </button>
                            <button className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                              <i className="fas fa-edit"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Exercices d'algèbre
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            15 mai 2025
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Terminé
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button className="text-indigo-600 hover:text-indigo-900 mr-3 cursor-pointer">
                              <i className="fas fa-eye"></i>
                            </button>
                            <button className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                              <i className="fas fa-edit"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Projet de sciences
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            25 mai 2025
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              À venir
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button className="text-indigo-600 hover:text-indigo-900 mr-3 cursor-pointer">
                              <i className="fas fa-eye"></i>
                            </button>
                            <button className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
                              <i className="fas fa-edit"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button className="whitespace-nowrap !rounded-button cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                      Voir tous les devoirs
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Outils de création de contenu
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                        <i className="fas fa-file-alt text-xl"></i>
                      </div>
                      <h4 className="ml-3 text-lg font-medium text-gray-900">
                        Lancer un cours
                      </h4>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Demmarer une nouvelle session de cours avec vos etudiants
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                        <i className="fas fa-question-circle text-xl"></i>
                      </div>
                      <h4 className="ml-3 text-lg font-medium text-gray-900">
                        Créer un devoir
                      </h4>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Concevez des questionnaires interactifs pour évaluer les
                      connaissances de vos etudiants.
                    </p>
                  </div>
                  <div className="border border-bleu-600 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-pink-100 text-pink-600">
                        <i className="fas fa-download text-xl"></i>
                      </div>
                      <h4 className="ml-3 text-lg font-medium text-gray-900">
                        Uploader un fichier
                      </h4>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Enregistrez et partagez des explications vidéo avec vos
                      élèves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default TableauBordProf
