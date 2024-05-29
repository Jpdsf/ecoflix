import React from "react"
import { Link } from 'react-router-dom'
import Header from "../../components/Header"
import { StyledRegistro } from "./style"

export default function Registro() {
    return (
        <StyledRegistro>
           <Header />
           <div className="container">
                    <div className="containerRegistro">
                        <h2 className="registro" >Registro</h2>
                        
                        <div className="registroItens">
                            <label htmlFor="">Email</label>
                            <input type="text" />
                            <label htmlFor="">Senha</label>
                            <input type="text" />
                            <label htmlFor="">Digite Novamente a Senha</label>
                            <input type="text" />
                            <Link to='/'><input type="button" value="Entrar"  /></Link>
                            <Link to='/Login'>Ja tem conta?</Link>
                        </div>
                    </div>
                </div>

        </StyledRegistro>
    )
}