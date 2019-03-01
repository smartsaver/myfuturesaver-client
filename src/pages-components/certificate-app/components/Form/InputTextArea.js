import React from 'react'
import FieldControl from './FieldControl'

/**
 *
 * @param {Object} labelText - text or any react element
 * @param {Object} name - Label and input name
 * @param {string} value - input value
 * @param {function} onChange - change handler for input
 */

const InputTextArea = ({ labelText, name, value, onChange }) => {
  return (
    <FieldControl
      label={
        <label htmlFor={name} className="label">
          {labelText}
        </label>
      }
      control={
        <textarea
          name={name}
          id={name}
          onChange={onChange}
          className="textarea"
          value={value}
        />
      }
    />
  )
}

export default InputTextArea
