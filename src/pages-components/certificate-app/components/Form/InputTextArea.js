import React from 'react'
import FieldControl from './FieldControl'

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
