import React from "react"
import AppRoutes from "./Routes.jsx"
import { AuthContext, AuthProvider } from "./contexts/auth";
const App = () =>{
  return(
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}


export default  App;