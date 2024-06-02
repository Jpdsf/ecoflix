// Header.js
import React from 'react';
import { StyledHeader } from './styles';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <StyledHeader>
      <nav className="NavBar">
        <ul className="NavBarItem">
          <li className="NavItens"><Link to="/">Home</Link></li>
          <li className="NavItens"><Link to="/Contato">Contato</Link></li>
          <li className="NavItens"><Link to="/Mapa">Mapa</Link></li>
          <li className="NavItens"><Link to="/Usuario"><img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="" srcset="" width={"35px"} /></Link></li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
