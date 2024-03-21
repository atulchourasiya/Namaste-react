import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/*
- Header
 - Logo
 - Nav Item
- Body
 - Search
 - RestaurantContainer
   - RestaurantCard
- Footer
 - Copyright 
 - Links
 - Address
 - Contact
*/

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://marketplace.canva.com/EAE6qtOUX08/1/0/1600w/canva-good-kitchen-logo-design-with-chef-hat-symbol-8C8EhVwzkV8.jpg'
          alt=''
        />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ title , quisine})=>{
  return <div className="res-card" style={{background :'red'}}>
    <img src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710720000&semt=sph" alt="" />
    <h3>{alert(title)}</h3>
    <h4>{quisine}</h4>
    <h4>4.4 stars</h4>
    <h4>38 minute</h4>
  </div>
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search
      </div>
        <div className="res-container">
          <RestaurantCard title={'Meghana'} quisine={'biryani'}/>
          <RestaurantCard title={'Meghana'} quisine={'biryani'}/>
          <RestaurantCard title={'Meghana'} quisine={'biryani'}/>
        </div>
    </div>
  )
};

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(AppLayout());
