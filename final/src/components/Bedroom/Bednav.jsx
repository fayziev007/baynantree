import React from 'react';
import { Link, Routes, Route } from "react-router-dom";


const Bednav = () => {
  return <div className='container'>
      <div className="text-one">
          <h1>APARTMENT PLANS</h1>
      </div>
      <nav className='navbar-2'>
          <ul>
                <li> <Link to="/bedroom"> BEDROOM </Link> </li>
                <li> <Link to="/bedroom2"> BEDROOM2 </Link> </li>
                <li> <Link to="/bedroom3"> BEDROOM3 </Link> </li>
                <li> <Link to="/penthouse"> PENTHOUSE </Link> </li>
                <li> <Link to="/duplex"> DUPLEX </Link> </li>
          </ul>
      </nav>
      </div>
};

export default Bednav;
