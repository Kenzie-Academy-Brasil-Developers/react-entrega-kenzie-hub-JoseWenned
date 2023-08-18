import { createContext, useState } from "react"
import { api } from "../../services/api.js"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const UserContext = createContext({})

export const UserProvider = ( { children } ) => {

    const [ user, setUser ] = useState(null)

    const navigate = useNavigate()

    // const loadList = async () => {
    //     try{
    //         const response = await api.get("/users")
    //         setUser(response.data)
    //     }catch (error) {
    //         console.log(error)
    //     };
    // };

    const createUser = async (formData) => {
        
        try{
            
            const {data} = await api.post("/users", formData)
            
                toast.success("Account successfully registered!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            
        
            setUser((list) => [...list, data]),

            setTimeout(() =>{
                navigate("/Login")
            }, 4000)
            
        }catch (error) {
            console.log(error),
            
                toast.error("Oops! Something went wrong.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("@TOKEN"),
        localStorage.removeItem("@USERID"),
        navigate("/")
        setUser(null)
    };

    return(

        <UserContext.Provider value={{ handleLogout, setUser, createUser, user}}>
            { children }
        </UserContext.Provider>

    )

}