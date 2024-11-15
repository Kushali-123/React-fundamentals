import React from 'react'
import {FaBars} from 'react-icons/fa';
import {useGlobalContext} from './Context'
import NavLinks from './NavLinks';


const NavBar = () => {
  
  const {openSideBar, setPageId} = useGlobalContext(); 

  const handleSubMenu = (e) => {
      // console.log(e.target);
      if(!e.target.classList.contains('nav-link')){
        setPageId(null);
      }
  }

  return (
    <nav onMouseOver={handleSubMenu}>
        <div className="nav-center">
            <h3 className='logo'>Strapi</h3>
            <button className='toggle-btn' onClick={openSideBar}>
                <FaBars/>
            </button>
            <NavLinks/>
        </div>
    </nav>
  )
}

export default NavBar