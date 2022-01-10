import React from 'react'
import PropTypes from 'prop-types';

const Button = ({text, color, onClick}) => {
    return <button style={{'backgroundColor': color}} onClick={onClick}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button
