import React, { Component } from "react";
import PropTypes from "prop-types";

const Header = props => (
  <header className='top'>
    <h1 className='top'>Juice Cafe</h1>
    <h3 className='tagline'>
      <span>{props.tagline}</span>
    </h3>
  </header>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired
};
export default Header;
