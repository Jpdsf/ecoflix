import React from "react"
import { Link, useNavigate } from 'react-router-dom';
import Header from "../../components/Header"
import Button from "../../components/Button";
import Input from "../../components/Input";
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
                <div className="container">
                    <div className="containerLogin">
                        <h2 className="login" >Login</h2>
                        
                        <div className="loginItens">
                            <Input type={"email"} placeholder={"Digite seu email"} value={email}  onChange={(e) => [setEmail(e.target.value), setError("")]} />
                            <Input type="password" value={senha} placeholder="Digite sua senha" onChange={(e) => [setSenha(e.target.value), setError("")]} />
                            {error}
                            <Button type="button" Text={"Entrar"} onClick={handleLogin} />
                            Não tem conta?<Link to='/Registro'>Registre-se</Link>
                        </div>
                    </div>
                </div>


        </StyledLogin>
    )
}