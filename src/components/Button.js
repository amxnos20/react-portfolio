import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline', 'btn--outline-b']
const SIZES = ['btn--medium', 'btn--large']

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  pathProps,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <Link to={`${pathProps}`}>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  )
}

export default Button
