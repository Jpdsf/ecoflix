import React from "react"
import { Link } from 'react-router-dom';
import Header from "../../components/Header"
import { StyledHome } from "./style"

export default function Home() {
    return (
        <StyledHome>
            <Header />
            <div>
                <div>
                    <h3 className="title">REGISTRE-SE</h3>
                    <form action="" method="get">
                        <label htmlFor="">email</label>
                        <input type="text" />
                        <br></br>
                        <label htmlFor="">senha</label>
                        <input type="password" name="" id="" />
                        <br></br>
                        <Link to="/Jp">Clique aq</Link>
                        <link rel="stylesheet" href="/jp" /><button>Registre-se</button>
                    </form>
                </div>
            </div>
        </StyledHome>
    )
}