import React from "react"
import { Link, useNavigate } from 'react-router-dom';
import Header from "../../components/Header"
import { StyledHome } from "./style"
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";

const Home = () => {
    return (
        <StyledHome>
            <Header />
            <div className="title">
                <h1>Home</h1>
            </div>
        </StyledHome>
    )

}



export default Home