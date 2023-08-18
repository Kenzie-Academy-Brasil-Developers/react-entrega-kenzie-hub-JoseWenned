import { StyledTitleTwo } from "../../styles/typography.js"
import { UserFormLogin } from "../../components/FormLogin"
import { ContainerLogin } from "./style"
import { api } from "../../services/api"
import { useState } from "react"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormSchemaLogin } from "../../components/FormLogin/formSchemaLogin"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../router/providers/UserContext.jsx"

export const Login = () => {

    const { setUser } = useContext(UserContext)

    const [ course_module, setCourseModule ] = useState("")
    const [ errorMessage, setErrorMessage ] = useState("")

    const navigate = useNavigate() 

    const { 
        register, 
        handleSubmit, 
        reset, 
        formState: { errors } 
        } = useForm({
        resolver: zodResolver(FormSchemaLogin)
    })

    useEffect(() => {

        const token = localStorage.getItem("@TOKEN")
        const userId = localStorage.getItem("@USERID")

        if(token && userId) {
            const isValidToken = validateToken(token)

            if(isValidToken) {
                navigate("/Home")
            }
        } else {
            localStorage.removeItem("@TOKEN")
            localStorage.removeItem("@USERID")
        }
    }, [])

    const validateToken = () => {
        const experationTime = localStorage.getItem("@TOKEN_EXPIRATION")
        const currentTime = new Date().getTime()

        return experationTime && currentTime < experationTime
    }

    const submit = async (formData) => {
        try{

            const response = await api.post("/sessions", formData)
            const { data } = response

            localStorage.setItem("@TOKEN", data.token)
            localStorage.setItem("@USERID", data.user.id)

            setUser(data.user)
            setCourseModule(data.user.course_module)
            

            toast.success("Account successfully registered!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

           
            reset()

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
    
    return(
        <>
            <ContainerLogin>
                <StyledTitleTwo $fontSize="xl">Kenzie Hub</StyledTitleTwo>
            
                <UserFormLogin submit={submit} handleSubmit={handleSubmit} register={register} errors={errors}/>
            </ContainerLogin>
        </>
       
    )
}