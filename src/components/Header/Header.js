import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
//import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const {logOut,user}= useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />

            <nav>
                <NavLink activeClassName="active" className="nav-item" to="/shop">Shop</NavLink>
                <NavLink activeClassName="active" className="nav-item" to="/review">Order Review</NavLink>
                <NavLink activeClassName="active" className="nav-item" to="/inventory">Manage Inventory</NavLink>
               {user.email?
               <span>
                   <small style={{color:"yellow", margin:"5px"}} >{user.displayName  }</small>
               <button onClick={logOut}>Sign out</button>
               </span>
               :
               <NavLink activeClassName="active" className="nav-item" to="/login">Login</NavLink>
                }

            </nav>
        </div>
    );
};

export default Header;