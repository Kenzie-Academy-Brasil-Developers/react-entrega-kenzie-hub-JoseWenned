import { createContext, useEffect, useState } from "react"
import { api } from "../../services/api.js"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const UserContext = createContext({})

export const UserProvider = ( { children } ) => {

    const [ user, setUser ] = useState(null)
    const [ course_module, setCourseModule ] = useState("")
    const [ errorMessage, setErrorMessage ] = useState("")

    const navigate = useNavigate()

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
            
            setUser(data),
            
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

    const loadUser = async (formData) => {
    
        try{

            const response = await api.post("/sessions", formData)
            const { data } = response

            localStorage.setItem("@TOKEN", data.token)
            localStorage.setItem("@USERID", data.user.id)

            setUser(data.user)
            setCourseModule(data.user.course_module)
            

            toast.success("Successfully login!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            setTimeout(() =>{
                navigate("/Home")
            }, 4000)
            

        }catch(error) {

            setErrorMessage("Invalid e-mail or password")
            toast.error("Oops! Something went wrong.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    
    }

    const handleLogout = () => {
        localStorage.removeItem("@TOKEN"),
        localStorage.removeItem("@USERID"),
        navigate("/")
        setUser(null)
    };

    return(

        <UserContext.Provider value={{ handleLogout, setUser, createUser, user, setErrorMessage, setCourseModule, loadUser}}>
            { children }
        </UserContext.Provider>

    )

}