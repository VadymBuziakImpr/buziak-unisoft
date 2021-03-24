import React, { useState } from 'react'
import { ReactComponent as EyeIcon } from '../assets/svg/icon-visibility.svg'

const Input = ({ value, onChange, placeholder, type = 'text', ...props }) => {
  const [focused, setFocused] = useState(false)
  const [inputType, setInputType] = useState(type)
  const isPassword = type === 'password'

  const handleFocus = () => {
    setFocused(true)
  }

  const handleBlur = () => {
    setFocused(false)
  }

  const handleTogglePassword = () => {
    setInputType((prev) => (prev === 'password' ? 'text' : 'password'))
  }

  return (
    <div className={`input-wrapper${focused || value ? ' focused' : ''}`}>
      <label>
        <input
          type={inputType}
          value={value || ''}
          onChange={onChange}
          {...props}
          className="input-wrap"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <span className="input-placeholder">{placeholder}</span>
        {isPassword && (
          <div className="show-password">
            <EyeIcon />
            <input
              name="showPassword"
              type="checkbox"
              checked={type === 'password'}
              onChange={handleTogglePassword}
            />
          </div>
        )}
      </label>
    </div>
  )
}

export default Input
