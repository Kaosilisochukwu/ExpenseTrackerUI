import React from 'react'

export const Input = ({type, placholder, disabled}) => {
  return (
    <input type={type} placeholder = {placholder} disabled= {disabled}/>
  )
}

export default Input;