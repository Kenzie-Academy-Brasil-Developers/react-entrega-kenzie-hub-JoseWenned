import { useContext } from "react"
import { UserContext } from "../../router/providers/UserContext"
import { Outlet, Navigate } from "react-router-dom"

export const ProtectionRoute = () => {

    const { user } = useContext(UserContext)

    return user ? <Outlet /> : <Navigate to="/"/>  
    
}