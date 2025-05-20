import React from 'react'
import "./today-deal.css"
const TodayDeal = () => {

    const deal = [
        {
          id: 1,
          name: '',
          href: 'index.html',
          imageSrc: "src/Images/shawana's choco/côte d'or.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: '14.49',
          color: 'Black',
        },

        {
            id: 2,
            name: '',
            href: 'index.html',
            imageSrc: "src/Images/shawana's choco/exelcium .jpg",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '14.49',
            color: 'Black',
        },

        {
            id: 1,
            name: '',
            href: 'index.html',
            imageSrc: "src/Images/shawana's choco/Giant lolipop.webp",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '14.49',
            color: 'Black',
          },

          {
            id: 1,
            name: 'Apple Vision Pro',
            href: 'index.html',
            imageSrc: "src/Images/shawana's choco/Lion-shelf-display unit.webp",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '14.49',
            color: 'Black',
          },

          {
            id: 1,
            name: 'Apple Vision Pro',
            href: 'index.html',
            imageSrc: "src/Images/shawana's choco/lovely cherry.jpeg",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '14.49',
            color: 'Black',
          },

          {
            id: 1,
            name: 'Apple Vision Pro',
            href: 'index.html',
            imageSrc: "src/Images/shawana's choco/milka deim.jpg",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '14.49',
            color: 'Black',
          },

          {
            id: 1,
            name: 'Apple Vision Pro',
            href: 'index.html',
            imageSrc: "src/Images/shawana's choco/Minie pouettoue.jpg",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '14.49',
            color: 'Black',
          },

          {
            id: 1,
            name: 'Apple Vision Pro',
            href: 'index.html',
            imageSrc: "src/Images/shawana's choco/nutella.png",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '14.49',
            color: 'Black',
          },

          {
            id: 1,
            name: 'Apple Vision Pro',
            href: 'index.html',
            imageSrc: "src/Images/shawana's choco/safarie chocolate.png",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '14.49',
            color: 'Black',
          },

          {
            id: 1,
            name: '',
            href: 'index.html',
            imageSrc: "src/Images/shawana's choco/Minie pouettoue.jpg",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '14.49',
            color: 'Black',
          },

          

          {
            id: 1,
            name: '',
            href: 'index.html',
            imageSrc: "src/Images/shawana's choco/savane-fam-1.png" ,
            imageAlt: "Front of men's Basic Tee in black.",
            price: '14.49',
            color: 'Black',
          },

          {
            id: 1,
            name: '',
            href: 'index.html',
            imageSrc: "src/Images/shawana's choco/school cookies.webp",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '14.49',
            color: 'Black',
          },

          {
            id: 1,
            name: '',
            href: 'index.html',
            imageSrc: "src/Images/shawana's choco/WhatsApp Image 2024-02-16 à 16.34.54_124a6f9c.jpg",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '14.49',
            color: 'Black',
          },
          
        
    ]

  return (
    <div className="products-slider-with-price">

        <h2 className='color-red'>Offre du jour</h2>

            <div className="products">

                {deal.map((product) => (

                    <div className="products-card color-gray mr-10">
        
                        <div className="products-img-container">

                            <img src={product.imageSrc} alt={product.name}/>
                        </div>
        
                        <div className="products-offer">
                            <p>27% off</p> <span>Deal</span>
                        </div>
        
                        <p className="products-price">$ <span>{product.price}</span> List Price:$19.95</p>
        
                        <h4>This product is the best for you</h4>
                    </div>
                ))}
    
            </div>
    </div>
  )
}

export default TodayDeal
