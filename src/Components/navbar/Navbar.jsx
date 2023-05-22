// import { Link } from 'react-router-dom';
// import './navbar.css';

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <Link to="/stressometer" className="nav-link" activeClassName="active-link">Stressometer</Link>
//             <Link to="/doctorai" className="nav-link" activeClassName="active-link">DoctorAI</Link>
//             <Link to="/recommend" className="nav-link" activeClassName="active-link">Recommend a Psychiatrist</Link>
//             <Link to="/blog" className="nav-link" activeClassName="active-link">Blog</Link>
//         </nav>
//     );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../Assets/logo.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        
        <Link to="/" className='navbar-links_logo'>
          <img src={logo} alt="logo" />
        </Link>
        <div className="navbar-links_container">
          <p><Link to="/" className='nav-link'>Home</Link></p>
          <p><Link to="/stressometer" className="nav-link">Stressometer</Link></p>
          <p><Link to="/doctorai" className="nav-link">DoctorAI</Link></p>
          <p><Link to="/recommend" className="nav-link">Recommend a Psychiatrist</Link></p>
          <p><Link to="/blog" className="nav-link">Blog</Link></p>
        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <Link to="/stressometer" className="nav-link">Stressometer</Link>
          <Link to="/doctorai" className="nav-link">DoctorAI</Link>
          <Link to="/recommend" className="nav-link">Recommend a Psychiatrist</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
