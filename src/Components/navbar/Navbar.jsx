import React, { useContext, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../Assets/logo.png';

import { AuthContext } from '../../AuthContext';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const {user,logout} = useContext(AuthContext);

  const navigate = useNavigate();
  
  const handlelogout =()=>{
    logout();
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 1000); // delay of 1 second

  }
  return (
    <div className="navbar">
      <div className="navbar-links">
        
        <Link to="/" className='navbar-links_logo'>
          <img src={logo} alt="logo" />
        </Link>
        <div className="navbar-links_container">
          <p><Link to="/" className='nav-link'>Home</Link></p>
         
          
          {/* conditionally render login,register,logout based on user authentication status */}
          {user===null ?(<>
            <p><Link to="/login" className='nav-link'>Login</Link></p>
            <p><Link to="/register" className='nav-link'>Register</Link></p>
          </>):(
            <>
              <p><Link to="/stressometer" className="nav-link">Stressometer</Link></p>
              <p><Link to="/doctorai" className="nav-link">DoctorAI</Link></p>
              <p><Link to="/recommend" className="nav-link">Recommend a Psychiatrist</Link></p>
              <p><Link to="/blog" className="nav-link">Blog</Link></p>
              <p><button onClick={handlelogout} className='nav-link logout-button'>Logout</button></p>

            </>           
          )}

        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          
          
          {/* conditionally render login,register,logout based on user authentication status */}
          {user ===null ?(<>
            <p><Link to="/login" className='nav-link'>Login</Link></p>
            <p><Link to="/register" className='nav-link'>Register</Link></p>
          </>):(
            <>
            <Link to="/stressometer" className="nav-link">Stressometer</Link>
            <Link to="/doctorai" className="nav-link">DoctorAI</Link>
            <Link to="/recommend" className="nav-link">Recommend a Psychiatrist</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <p><button onClick={handlelogout} className='nav-link logout-button'>Logout</button></p>

          </>)}

        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
