import React from 'react'
import { CDN_URL } from '../utils/constant';

const RestaurantCard = ({ title, quisine , imgID , rating , eta }) => {
   console.log(title)
   return <div className="res-card" >
      <img className='res-card-img' src={`${CDN_URL}/${imgID}`} alt="" />
      <h3>{title}</h3>
      <h4>{quisine}</h4>
      <h4>{rating}</h4>
      <h4>{eta} Minute</h4>
   </div>;
}

export default RestaurantCard
