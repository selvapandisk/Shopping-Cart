import React from 'react';
import "./cards.css";

const Cards = ({item, handleClick}) => {
    const {title, About, price, img} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{About}</p>
            <p>Price =$ {price}</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards