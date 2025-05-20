import React from 'react'
import Slider from 'react-slick'
import '/src/index.css'
import Banner from '../Banner/Banner'

const SecondBanner = () => {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //   };

    // const products = [
    //     {
    //       name: 'Redmi Watch',
    //       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident accusamus impedit minima harum corporis iusto.',
    //       imageUrl: 'src/Images/img_con.png',
    //     },
    //     {
    //       name: 'Iphone X',
    //       description: 'Un autre produit incroyable avec des fonctionnalités avancées.',
    //       imageUrl: "src/Images/IDANI'S SHOP/3.png",
    //     },

    //     {
    //         name: 'Iphone X',
    //         description: 'Un autre produit incroyable avec des fonctionnalités avancées.',
    //         imageUrl: "src/Images/shawana's choco/4.png",
    //       },

    //       {
    //         name: 'Iphone X',
    //         description: 'Un autre produit incroyable avec des fonctionnalités avancées.',
    //         imageUrl: "src/Images/Eddy's Game/5.png",
    //       },

    //       {
    //         name: 'Iphone X',
    //         description: 'Un autre produit incroyable avec des fonctionnalités avancées.',
    //         imageUrl: "src/Images/Aris iphone/6.png",
    //       },
    // ]


  return (
    <div className='h-80 m-5 mb-15  py-5 '>
        <div className=" color-white ">

        {/* <h1 className='h1-decoration' lg:place-content-center>YAMPADIMA</h1> */}

        <Banner/>

        {/* <ul>
            <img src={product.imageUrl} class="header-img" alt=""/>
            
        </ul> */}

        </div> 
    </div>
    
  )
}

export default SecondBanner
