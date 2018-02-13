import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';

const NavBar = props => (
  <header className="navbar">
    <h1 className="navbar-title">{props.title}</h1>
  </header>
);

NavBar.propTypes = {
  title: PropTypes.string.isRequired
};

export default NavBar;
