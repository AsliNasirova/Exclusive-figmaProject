import React from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar">
            <div className="exclusive_text_left">
                <div className="exclusive">
                    <h3>Exclusive</h3>
                </div>
                <div className="navbar_main">
                    <ul className='navbarBox'>
                        <NavLink activeClassName='active' to={'/'}>Home</NavLink>
                        <NavLink activeClassName='active' to={'/about'}>About</NavLink>
                        <NavLink activeClassName='active' to={'/contact'}>Contact</NavLink>
                        <NavLink activeClassName='active' to={'/sign-up'}>Sign-up</NavLink>
                    </ul>
                </div>

            </div>

            <div className="whoareyou_text_right">
               <div className="searchPart">
                <input className='input-search' type="text" placeholder='What are you looking for?' />
                <div className='search-icon'><CiSearch /></div>
                </div> 
               <div className="searchPart-icons">
               <CiHeart />
               <CiShoppingCart />
                </div> 
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
