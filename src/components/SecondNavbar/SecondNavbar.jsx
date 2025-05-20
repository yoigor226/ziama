import React from 'react'
import '/src/index.css'
const SecondNavbar = () => {
  return (
    <div className="nav-botton bg-green-200">
        <div className='nav-botton-div '>
            <img src="src/Images/menu_icon.png" width="25px" alt=""/>
            <p>
                <a href="index.html">Categorie</a>
            </p>
        </div>

        <p>Today's Deals</p>
        <p>Custumer Service</p>
        <p>Registry</p>
        <p>Gift Cards</p>
        <p>Sell</p>
                
                
    </div>
  )
}

export default SecondNavbar
