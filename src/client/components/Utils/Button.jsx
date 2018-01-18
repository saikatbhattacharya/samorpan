import React from 'react';
import PropTypes from 'prop-types';

require('styles/mainbody.scss');

const Button = ({ label, link }) => (
  <div className="custom-button">
    <a href={link} className="bttn">{label}</a>
  </div>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
