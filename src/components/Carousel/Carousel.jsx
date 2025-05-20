// import React, {useState} from 'react'
import Slider from 'react-slick'
const Carousel = () => {

    // const [currentSlide, setCurrentSlide] = useState(0);

    // const handleSlideChange = (index) => {
    //     setCurrentSlide(index);
    //   };
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

      

      const products = [
        {
          name: 'Redmi Watch',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident accusamus impedit minima harum corporis iusto.',
          imageUrl: 'https://th.bing.com/th/id/OIP.Tag9EomcBMR3Bmo7UCgnpQHaIO?rs=1&pid=ImgDetMain',
        },
        {
          name: 'Iphone X',
          description: 'Un autre produit incroyable avec des fonctionnalités avancées.',
          imageUrl: 'https://th.bing.com/th/id/OIP.wpSvAM3yzYX5PqFlFeV_igHaG3?rs=1&pid=ImgDetMain',
        },

        {
          name: 'Oculus',
          description: 'Un autre produit incroyable avec des fonctionnalités avancées.',
          imageUrl: 'https://th.bing.com/th/id/OIP.zcdhSdou9MBsZYzJNaBRKAHaHu?w=1538&h=1604&rs=1&pid=ImgDetMain',
        },

        {
          name: 'ASUS Zenbook 14',
          description: 'Un autre produit incroyable avec des fonctionnalités avancées.',
          imageUrl: 'https://th.bing.com/th/id/OIP.9KLlSQqT9td_h3DWuQRlVQHaHa?rs=1&pid=ImgDetMain',
        },

        {
          name: 'Bracelet',
          description: 'Un autre produit incroyable avec des fonctionnalités avancées.',
          imageUrl: 'https://ae01.alicdn.com/kf/HTB1UDGRc7WE3KVjSZSyq6xocXXa6/CZ.jpg',
        },

        {
          name: 'JBL Flip 6',
          description: 'Un autre produit incroyable avec des fonctionnalités avancées.',
          imageUrl: 'https://th.bing.com/th/id/OIP.eV_AHmvEym2JI4Oc3Y5L4QHaHa?rs=1&pid=ImgDetMain',
        },
        
    ];

  return (
    <Slider {...settings} className=''>
                {products.map((product) => (
                    <div>
    <section className=" mt-2 relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 to-transparent z-10"></div>
        
        <div
          className="absolute inset-0  bg-center"
          style={{
            backgroundImage: `url(${product.imageUrl})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 80px center',
          }}
        ></div>
        <div className="container mx-auto h-full flex items-center relative z-20">
          <div className="text-white max-w-xl px-4 md:px-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 ml-8">
              {product.name}
            </h1>
            <p className="text-xl mb-8 ml-8">
              {product.description}
            </p>
            <button className="bg-red-500 ml-8 text-white-900 px-8 py-3 font-medium hover:bg-gray-100 transition duration-300 cursor-pointer !rounded-button whitespace-nowrap">
              Acheter Maintenant
            </button>
          </div>
        </div>
        
        {/* Indicateurs de défilement */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
          {/* <div className="flex space-x-2">
            {products.map((index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div> */}
        </div>
      </section>
      </div>
        ))}
        </Slider>
  )
}

export default Carousel
