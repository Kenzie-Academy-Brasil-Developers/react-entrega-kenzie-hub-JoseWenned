import { StyledTitleTwo } from "../../styles/typography.js"
import { UserFormLogin } from "../../components/FormLogin"
import { ContainerLogin } from "./style"
import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormSchemaLogin } from "../../components/FormLogin/formSchemaLogin"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../router/providers/UserContext.jsx"

export const Login = () => {

    const { loadUser } = useContext(UserContext)

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

    const submit = (formData) => {
        loadUser(formData)
        reset()
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