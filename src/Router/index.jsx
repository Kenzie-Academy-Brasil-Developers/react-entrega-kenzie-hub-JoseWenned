import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/HomePage"
import { Register } from "../Pages/UserRegister"
import { Login } from "../Pages/UserLogin"
import { useEffect, useState } from "react"
import { api } from "../services/api"
import { UserList } from "../components/UserList"

export const RouterMain = () => {

    const [ list, setList ] = useState([])
    const [ course_module, setCourseModule ] = useState("")
    const [ user, setUser ] = useState(null)

    useEffect(() => {
        const loadList = async () => {
            try{
                const response = await api.get("/users")
                setList(response.data)
            }catch (error) {
                console.log(error)
            }
        }
        loadList()
    }, [])

    return(
        
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/Home" element={<Home user={user} list={list}/>}/>
            <Route path="/Login" element={<Login setUser={setUser}/>}/>
            <Route path="/Register" element={<Register setList={setList}/>}/>
        </Routes>
        
    )
}