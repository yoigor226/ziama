import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import '/src/components/Banner/banner.css';
import image from '../../assets/ener.webp'

const FiveBanner = () => {
  return (
    
    <div className="hidden md:block">
      <Card className="w-200 h-70 mt-8 ml-4 flex-row bg-green-300">
        
        <CardBody>
          <Typography variant="h2" color="white" className="mb-4 uppercase">
            Énergies Renouvelables
          </Typography>
          
          <Typography color="white" className="mb-8 font-normal">
            Solutions solaires, éoliennes et autres énergies propres
            pour un avenir énergétique durable et économique.
          </Typography>
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

        <CardHeader
          shadow={false}
          floated={false}
          className="m-0  w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover w-32 h-32"
          />
        </CardHeader>

      </Card>
    </div>
  )
}

export default FiveBanner
