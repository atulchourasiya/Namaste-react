import React from 'react'
import RestaurantCard from './RestaurantCard';
import { data } from '../utils/mockdata';

const Body = () => {
   return (
      <div className="body">
         <div className="filter"><button className="filter-btn">Top Rated Restaurant</button></div>
         <div className="res-container">
           { data.map((item)=>{
              return <RestaurantCard title={item.info.name} quisine={'biryani'} imgID={item.info.cloudinaryImageId} rating={item.info.avgRating} eta={item.info.sla.deliveryTime}/>
            })}
         </div>
      </div>
   );
};

export default Body
