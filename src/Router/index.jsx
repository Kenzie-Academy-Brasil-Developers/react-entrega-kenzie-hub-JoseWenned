import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/HomePage"
import { Register } from "../Pages/UserRegister"
import { Login } from "../Pages/UserLogin"

export const RouterMain = () => {

    return(
        
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="/Register" element={<Register />}/>
        </Routes>
        
    )
}