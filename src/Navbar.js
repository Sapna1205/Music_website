import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const[click, setClick] = useState(false);
    const handleClick= () =>{
        setClick(!click);
    }
    const closeMobileMenu=()=>{
        setClick(false);
    }
    return (
        <>
        
        <nav className="navbar">
            <div className="navbar-container">
                
                    <Link className="nav-logo"><i className="fas fa-headphones-alt"></i> Music </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click?"fas fa-times" : "fas fa-bars"} />
                    </div>
            
                    <ul className={click? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item"><Link to="/" className="nav-links" onClick={closeMobileMenu} >Home</Link></li>
                        <li className="nav-item"><Link to="/services" className="nav-links" onClick={closeMobileMenu}>Services</Link></li>
                        <li className="nav-item"><Link to="/aboutUs" className="nav-links" onClick={closeMobileMenu} >About Us</Link></li>
                        <li className="nav-item"><Link to="/signUp" className="nav-links" onClick={closeMobileMenu} >Sign Up</Link></li>
                    </ul>
               
            </div>             
        </nav>
       
        </>
    )
}

export default Navbar;
