import { React, Fragment } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Registro from "./pages/Registro"
import Usuario from "./pages/Usuario" 
import useAuth from "./hooks/useAuth.jsx";
import Contato from "./pages/Contato"


const Private = ({Item}) =>{
    const {signed} = useAuth();

    return signed > 0 ? <Item /> : <Login />
}


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<Private Item={Home} />} />
                    <Route exact path="/Contato" element={<Private Item={Contato} />} />
                    <Route exact path="/Usuario" element={<Private Item={Usuario} />} />
                    <Route path="/Login" element={<Login />} />
                    <Route exact path="/Registro" element={<Registro />} />
                    <Route path="*" element={<Login />} />

                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}