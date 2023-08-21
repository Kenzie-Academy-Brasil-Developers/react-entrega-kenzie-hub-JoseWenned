import { Route, Routes, useNavigate } from "react-router-dom"
import { Home } from "../Pages/HomePage"
import { Register } from "../Pages/UserRegister"
import { Login } from "../Pages/UserLogin"
import { useContext, useEffect } from "react"
import { UserContext } from "./providers/UserContext"
import { ProtectionRoute } from "../components/ProtectionRoute"
import { api } from "../services/api"

export const RouterMain = () => {

    const { setUser } = useContext(UserContext)

    const navigate = useNavigate();

    useEffect(() => {

        const autoLogin = async () => {

            const token = localStorage.getItem("@TOKEN");

            if(token) {

                try {

                    const response = await api.get("/profile", {
                        headers: {
                            Authorization: `Bearer ${token} `
                        }
                    })

                    const user = response.data 
                    setUser(user)
                    navigate("/Home")

                } catch (error){
                    console.log(error)

                    localStorage.removeItem("@TOKEN")
                    setUser(null)

                }
            }
        }

        autoLogin()

    }, [])

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