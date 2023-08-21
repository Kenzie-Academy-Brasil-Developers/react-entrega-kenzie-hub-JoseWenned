import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/HomePage"
import { Register } from "../Pages/UserRegister"
import { Login } from "../Pages/UserLogin"
import { ProtectionRoute } from "../components/ProtectionRoute"


export const RouterMain = () => {

    return(
        
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/Home" element={<ProtectionRoute/>}> 
                <Route index element={<Home />}/>
            </Route>
            <Route path="/Login" element={<Login />}/>
            <Route path="/Register" element={<Register />}/>
        </Routes>
        
    )
}