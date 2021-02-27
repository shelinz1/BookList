import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    
    return ( 
        <nav className="navbar navbar-dark bg-dark container" >
            <span className="navbar-brand mb-0 text-primary">ShedRead</span>
            <div className="navs mr-5">
                <NavLink to="/" style={linkStyle}>Home</NavLink> | <Link to="/about" style={linkStyle}>About</Link>  | <Link to="/contact" style={linkStyle}>Contact</Link>
            </div>

        </nav>
     );
}

const linkStyle = {
    color: 'white',
    textDecoration:'none',
}
 
export default Navbar;