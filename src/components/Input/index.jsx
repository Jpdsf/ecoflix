// Header.js
import React from 'react';
import { StyledInput } from './styles';
import { Link } from 'react-router-dom';

const Input = ({type, placeholder, value, onChange}) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      />

  )
}

export default Input
