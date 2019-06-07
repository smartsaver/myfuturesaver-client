import React from 'react'

const Form = props => {
  const { name = '', className = '', method = '', children, onSubmit } = props
  return (
    <form
      id={name}
      className={`Form ${className}`}
      method={method}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  )
}

export default Form
