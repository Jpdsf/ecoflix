import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Registro from "./pages/Registro"
export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Registro" element={<Registro />} />
            </Routes>
        </BrowserRouter>
    )
}