import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
   return(
    <nav style={{ display: 'flex', justifyContent: 'center', padding: '10px', background: '#f0f0f0' }}>
      <Link to="/" style={{ margin: '0 10px' , color:'black' , fontSize:'25px'}}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px' , color:'black' , fontSize:'25px'}}>About</Link>
      <Link to="/services" style={{ margin: '0 10px' , color:'black' , fontSize:'25px'}}>Services</Link>
      <Link to="/contact" style={{ margin: '0 10px' , color:'black' , fontSize:'25px'}}>Contact</Link>
    </nav>
   )
}

export default Navbar