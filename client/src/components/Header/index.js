import React,{useEffect} from 'react';
import {TOGGLE_NAV} from '../../utils/actions';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';

import { Link } from 'react-router-dom';

const Header = () => {

  const [state, dispatch] = useStoreContext();

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  
  function toggleNav() {
    dispatch({type: TOGGLE_NAV});
}
 
      
  
  if (!state.navActive){
    return(
      <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
        <img src={require("../../resources/typewriter.png")}></img>
          <h1 className="main-title">Pen Name</h1>
        </Link>
        
        <a role="button" onClick={toggleNav} class="navbar-burger" id="stick" aria-label="menu" aria-expanded="false" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
     </div>
    </nav>
    )
  } else {
    
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <img src={require("../../resources/typewriter.png")}></img>
        <h1 className="main-title">Pen Name</h1>
      </Link>
      
      <a role="button" onClick={toggleNav} class="navbar-burger is-active" id="stick" aria-label="menu" aria-expanded="false" >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
   </div>
  

     <div class="navbar-menu is-active "> 
      <div className="navbar-start">
        {Auth.loggedIn() ? (
          <>
          <Link className="navbar-item" to="/profile">Profile</Link>
          <Link className="navbar-item">Write</Link>
          <Link to="/" onClick={logout}>
           Logout
          </Link>
          </>
        ):(  <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>)}
      </div>
      <div className="navbar-end"></div>
      </div>
      </nav>
     ) 
      
      
  
 }
};

export default Header;
