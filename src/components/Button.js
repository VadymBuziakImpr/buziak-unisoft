import React from 'react'

const Button = ({ children, ...props }) => {
  return (
    <button className="main-btn" {...props}>
      {children}
    </button>
  )
}

export default Button
