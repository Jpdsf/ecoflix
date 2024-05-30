import React from "react";
import { StyledButton } from './styles';
import { Link } from 'react-router-dom';

export default function Button() {
  return (
    <StyledButton>
      <nav className="NavBar">
        <ul className="NavBarItem">
          <li className="NavItens"><Link to="/">Home</Link></li>
          <li className="NavItens"><Link to="/Login">Contato</Link></li>
          <li className="NavItens"><Link to="/Mapa">Mapa</Link></li>
        </ul>
      </nav>
    </StyledButton>
  );
}
