import React from "react";
import { StyledButton } from './styles';
import { Link } from 'react-router-dom';

const Button = ({Text, onClick, Type = "button"}) => {
  return (
    <StyledButton type={Type} onClick={onClick}>
      {Text}
    </StyledButton>
  )
} 

export default Button