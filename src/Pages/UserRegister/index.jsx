import { Header } from "../../components/Header"
import { UserFormRegister } from "../../components/FormRegister/index"
import { ContainerRegister } from "../UserRegister/style"
import { useForm } from "react-hook-form"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormSchemaRegister } from "../../components/FormRegister/formSchemaRegister"
import { toast } from "react-toastify"
import { useContext } from "react"
import { UserContext } from "../../router/providers/UserContext.jsx"

export const Register = () => {

    const { setUser } = useContext(UserContext)

    const { register, handleSubmit, reset, formState:{ errors } } = useForm({
        resolver: zodResolver(FormSchemaRegister)
    })

    const navigate = useNavigate()

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
            
        
            setUser((list) => [...list, data])

            setTimeout(() =>{
                navigate("/Login")
            }, 4000)
            
            
        }catch (error) {
            console.log(error)
            
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