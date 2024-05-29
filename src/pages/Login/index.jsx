import React from "react"
import { Link } from 'react-router-dom';
import Header from "../../components/Header"
import { StyledLogin } from "./style"

export default function Login() {
    return (
        <StyledLogin>
            <Header />
                <div className="container">
                    <div className="containerLogin">
                        <h2 className="login" >Login</h2>
                        
                        <div className="loginItens">
                            <label htmlFor="">Email</label>
                            <input type="text" />
                            <label htmlFor="">Senha</label>
                            <input type="text" />
                            <Link to='/'><input type="button" value="Entrar"  /></Link>
                            <Link to='/Registro'>Registre-se</Link>
                        </div>
                    </div>
                </div>


        </StyledLogin>
    )
}