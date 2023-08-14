import { useForm } from "react-hook-form"
import { StyleButtonEnter, StyleButtonRegisterPage } from "../../styles/button"
import { ContainerFormLogin } from "../FormLogin/style.js"
import { StyleLabel } from "../../styles/label"
import { StyledTitleThree, StyleError } from "../../styles/typography"
import { StyleInput } from "../../styles/input"
import { StyleParagraph } from "../../styles/typography"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormSchemaLogin } from "../../components/FormLogin/formSchemaLogin"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { useEffect, useState } from "react"
import  {  ToastContainer ,  toast  }  from  "react-toastify" 
import  "react-toastify/dist/ReactToastify.css" 
 
export const UserFormLogin = () => {
    
    const navigate = useNavigate() 

    const { 
        register, 
        handleSubmit, 
        reset, 
        formState: { errors } 
        } = useForm({
        resolver: zodResolver(FormSchemaLogin)
    })

    const [ course_module, setCourseModule ] = useState("")
    const [ user, setUser ] = useState(null)
    const [ errorMessage, setErrorMessage ] = useState("")

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

    const validateToken = (token) => {
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
            <ContainerFormLogin onSubmit={handleSubmit(submit)} noValidate> 

            <StyledTitleThree $fontSize="lg">Login</StyledTitleThree>

            <StyleLabel $labelSize="md" htmlFor="email">E-mail</StyleLabel>
            <StyleInput type="email" id="email" placeholder="Enter your e-mail here" {...register("email")}></StyleInput>
            <StyleError $fontSize="md">{errors.email?.message}</StyleError>

            <StyleLabel htmlFor="password" $labelSize="md">Password</StyleLabel>
            <StyleInput type="password" id="password"  placeholder="Enter your password here" {...register("password")}></StyleInput>
            <StyleError $fontSize="md">{errors.password?.message}</StyleError>


            <StyleButtonEnter $buttonSize="md" type="submit">To enter</StyleButtonEnter>

            <StyleParagraph $fontSize="md">Don't have an account yet?</StyleParagraph>

            <StyleButtonRegisterPage $buttonSize="md" type="submit" to={"/Register"}>Register</StyleButtonRegisterPage>
            </ContainerFormLogin>

            <div>
                <ToastContainer />
            </div>
        </>
      
    )
}