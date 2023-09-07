import React from 'react'
import './tooncard.css'; 

const CartoonCard = ({toon}) => {
  return (

        <div className="card">
        <a href={toon.link} target='blank'>
          <div className="content">
          <h1 className="name">{toon.name}</h1>
            <img src={toon.image} alt=""/>
          </div>
        </a>
       </div>
  )
}

export default CartoonCard
