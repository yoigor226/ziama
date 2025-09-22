import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import '/src/components/Banner/banner.css';
import image from '../../assets/ing.webp'
const ForBanner = () => {
  return (
    <div className="hidden md:block">
      <div className="w-full bg-white-200 p-4 mt-8"> 
          <div className="flex justify-end">
            <Card className="w-200 h-70 ml-4 flex-row bg-gray-500">
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
                  Ingénierie Électrique
                </Typography>
                
                <Typography color="white" className="mb-8 font-normal">
                  Conception et installation de systèmes électriques 
                  performants adaptés à tous types de projets industriels.
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
  )
}

export default ForBanner
