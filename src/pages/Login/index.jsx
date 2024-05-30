import React from "react"
import { Link, useNavigate } from 'react-router-dom';
import Header from "../../components/Header"
import { StyledLogin } from "./style"
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState("")

    const handleLogin = () => {
        if (!email | !senha){
            setError("Preencha todos os campos")
            return
        }

        const res = login(email, senha);

        if(res){
            setError(res);
            return
        }

        navigate("/")

    }


    return (
        <StyledLogin>
            <Header />
                <div className="container">
                    <div className="containerLogin">
                        <h2 className="login" >Login</h2>
                        
                        <div className="loginItens">
                            <input type="text" value={email} placeholder="Digite seu email" onChange={(e) => [setEmail(e.target.value), setError("")]} />
                            <input type="text" value={senha} placeholder="Digite sua senha" onChange={(e) => [setSenha(e.target.value), setError("")]} />
                            <input type="button" value="Entrar" onClick={handleLogin} />
                            Não tem conta?<Link to='/Registro'>Registre-se</Link>
                            {error}
                        </div>
                    </div>
                </div>


        </StyledLogin>
    )
}