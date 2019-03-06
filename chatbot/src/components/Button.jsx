import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick }) =>
    <button className="user-submit-button" onClick={onClick}>go</button>;

Button.propTypes = {
    onClick: PropTypes.func
};

export default Button;
