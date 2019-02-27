import React from 'react'

/**
 * @function InputField - input field bulma component
 * @param {string} name - for html for and input name
 * @param {any} labelText - label text
 * @param {function} onChange - change event handler
 * @param {string} value - input value
 * @param {string} [type='text'] - input type.
 * @param {string} className - css class
 */

const InputField = ({
  name,
  type = 'text',
  labelText = '',
  className = '',
  onChange,
  value,
}) => {
  return (
    <div
      className={`
        field 
        ${className}
      `}
    >
      <label htmlFor={name} className="label">
        {labelText}
      </label>
      <div className="control">
        <input
          name={name}
          type={type}
          className="input"
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  )
}

export default InputField
