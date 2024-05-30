import React, { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import Header from "../../components/Header"
import { StyledRegistro } from "./style"
import useAuth from "../../hooks/useAuth"


export default function Registro() {
    const [email, setEmail] = useState("")
    const [emailConfig, setEmailConfig] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate();
    
    const {registro} = useAuth();

    const handleSignup = () => {
        if (!email | !emailConfig | !senha){
            setError("Preencha todos os campos")
            return;
        }else if (email !== emailConfig){
            setError("Os e-mails não são iguais")
            return;
        }

        const res = registro(email, senha)

        if(res){
            setError(res);
            return;
        }

        alert("Usuário cadstrado com sucesso!")
        navigate("/")
    }



    return (
        <StyledRegistro>
            <Header />
            <div className="container">
                <div className="containerRegistro">
                    <h2 className="registro" >Registro</h2>

                    <div className="registroItens required">
                            <input type="email" value={email} onChange={(e) => [setEmail(e.target.value),setError("")]}  placeholder="Digite seu email" />
                            <input type="email" value={emailConfig} onChange={(e) => [setEmailConfig(e.target.value),setError("")]}  placeholder="Digite seu email" />
                            <input type="password" value={senha} placeholder="Digite sua senha" onChange={(e) => [setSenha(e.target.value), setError("")]} />
                            <button onClick={handleSignup}>Inscreva-se</button>
                            <Link to='/Login'>Ja tem conta?</Link>
                            {error}
                            
                        
                    </div>
                </div>
            </div>

        </StyledRegistro>
    )
}