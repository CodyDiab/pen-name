import React from 'react';

import Auth from '../../utils/auth';

import { Link } from 'react-router-dom';

const Header = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1>Pen Name</h1>
        </Link>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
     </div>
    <div class="navbar-menu"> 
  {Auth.loggedIn() ? (
    <>
      <Link to="/profile">Me</Link>
      <a href="/" onClick={logout}>
        Logout
      </a>
    </>
  ) : (
    <>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </>
  )}
  </div>
</nav>
    
  );
};

export default Header;
