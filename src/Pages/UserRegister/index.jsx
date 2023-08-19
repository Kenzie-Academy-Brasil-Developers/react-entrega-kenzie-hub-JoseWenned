import { Header } from "../../components/Header"
import { UserFormRegister } from "../../components/FormRegister/index"
import { ContainerRegister } from "../UserRegister/style"
import { useForm } from "react-hook-form"
// import { api } from "../../services/api"
// import { useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormSchemaRegister } from "../../components/FormRegister/formSchemaRegister"
// import { toast } from "react-toastify"
import { useContext } from "react"
import { UserContext } from "../../router/providers/UserContext.jsx"

export const Register = () => {

    const { createUser } = useContext(UserContext)

    const { register, handleSubmit, reset, formState:{ errors } } = useForm({
        resolver: zodResolver(FormSchemaRegister)
    })
 
    const submit = (formData) => {
        createUser(formData)
        reset()
    }


    return(
        <ContainerRegister>
           <Header />
           
           <UserFormRegister submit={submit} handleSubmit={handleSubmit} register={register} errors={errors}/>
        </ContainerRegister>
    )
}