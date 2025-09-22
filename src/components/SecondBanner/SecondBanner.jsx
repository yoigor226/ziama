import React from 'react'
import Slider from 'react-slick'
import '/src/index.css'
import '/src/components/Banner/banner.css';
import Banner from '../Banner/Banner'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import image from '../../assets/audit.png'
const SecondBanner = () => {

  return (
    <div id="services">
      <div className="w-full bg-white-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
            Nos Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            ZIAMA ENGINEERING allie technologie avancée et expertise locale pour offrir des
            solutions complètes en efficacité énergétique et énergies renouvelables.
          </p>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="w-full bg-white-200 p-4"> 
          <div className="flex justify-end">
            <Card className="w-200 h-70 ml-4 flex-row bg-green-500">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0  w-2/5 shrink-0 rounded-r-none"
              >
                <img
                  src={image}
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h2" color="white" className="mb-4 uppercase">
                  Audit Énergétique
                </Typography>
                
                <Typography color="white" className="mb-8 font-normal">
                  Analyse complète de votre consommation énergétique 
                  pour identifier les opportunités d'économies et d'optimisation.
                </Typography>
                <br></br>
                
                <a href="#" className="inline-block">
                  <Button variant="text" className="flex items-center gap-2 button1">
                    En savoir plus
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
              </CardBody>
            </Card>
          </div>  
        </div>
      </div>

      
    </div>
  );
}

export default SecondBanner
