import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/Auth";
import Alert from './Alert';
import PropTypes from 'prop-types';



const Navbar = ({auth: {isAuthenticated, loading}, logout}) => {
  const authLinks = (
    <a className='navbar_top_auth_link' onClick={logout} href='#!'>SIGNOUT</a>
  
  );
  const guestLinks = (
    <Fragment>
       <Link className="navbar_top_auth_link" to='/signin' >SIGNIN</Link>
       <Link className="navbar_top_auth_link" to='/signup' >SIGNUP</Link>
    </Fragment>
  )
  return(
    <Fragment>
       <nav className="navbar">
          <div className="navbar_top">
             <div className="navbar_top_logo">
                <Link className="navbar_top_logo_link" to='/'>REAL ESTATE</Link>
             </div>
             <div className="navbar_top_auth">
                { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks}</Fragment>)}
             </div>
          </div>
          <div className="navbar_bottom">
             <li className="navbar_bottom_item">
                 <NavLink className='navbar_bottom_item_link' exact to='/'>HOME</NavLink>
             </li>
             <li className="navbar_bottom_item">
                 <NavLink className='navbar_bottom_item_link' exact to='/listings'>LISTINGS</NavLink>
             </li>
             <li className="navbar_bottom_item">
                 <NavLink className='navbar_bottom_item_link' exact to='/about'>ABOUT</NavLink>
             </li>
             <li className="navbar_bottom_item">
                 <NavLink className='navbar_bottom_item_link' exact to='/contact'>CONTACT US</NavLink>
             </li>
          </div>
       </nav>
       <Alert />
    </Fragment>
  )
};

Navbar.prototype = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logout})(Navbar);
