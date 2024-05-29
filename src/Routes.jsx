import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}