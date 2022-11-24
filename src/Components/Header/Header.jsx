import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div class="topnav">
      <div className="reactrestaurant">
        <h2>Restaurante Casa Eustaquio</h2>
      </div>
      <div>
        <span>
          <Link to="/">Menu</Link>
        </span>
        <span>
          <Link to="/booking">Haz una reserva</Link>
        </span>
        <span>
          <Link to="/about">Sobre nosotros</Link>
        </span>
        
      </div>
    </div>
  );
}

export default Header