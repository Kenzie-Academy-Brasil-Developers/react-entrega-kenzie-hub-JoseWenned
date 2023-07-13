import { useForm } from "react-hook-form"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { StyleButtonRegister } from "../../styles/button" 
import { ContainerFormRegister } from "../FormRegister/style"
import { StyleLabel } from "../../styles/label"
import { StyleInput } from "../../styles/input"
import { StyleSelect } from "../../styles/select" 
import { zodResolver } from "@hookform/resolvers/zod"
import { FormSchemaRegister } from "../../components/FormRegister/formSchemaRegister"
import { StyleError } from "../../styles/typography"
import  {  ToastContainer ,  toast  }  from  'react-toastify' ; 
import  'react-toastify/dist/ReactToastify.css' ;

export const UserFormRegister = ({ setList }) => {

    const { register, handleSubmit, reset, formState:{ errors } } = useForm({
        resolver: zodResolver(FormSchemaRegister)
    })

    const navigate = useNavigate()

    const createUser = async (formData) => {
        
        try{
            const {data} = await api.post("/users", formData);
            
                toast.success('🦄 Account successfully registered!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            
        
            setList((list) => [...list, data])

            setTimeout(() =>{
                navigate("/Login")
            }, 4000)
            
            
        }catch (error) {
            console.log(error)
            
                toast.error('🦄 Oops! Something went wrong.', {
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
    <>
        <ContainerFormRegister onSubmit={handleSubmit(submit)}>

            <StyleLabel htmlFor="name" $labelSize="md">Name</StyleLabel>
            <StyleInput type="name" id="name" placeholder="Enter your name here" {...register("name")}></StyleInput>
            <StyleError $fontSize="md">{errors.name?.message}</StyleError>

            <StyleLabel htmlFor="email" $labelSize="md">E-mail</StyleLabel>
            <StyleInput type="email" id="email" placeholder="Enter your e-mail here" {...register("email")}></StyleInput>
            <StyleError $fontSize="md">{errors.email?.message}</StyleError>

            <StyleLabel htmlFor="password" $labelSize="md">Password</StyleLabel>
            <StyleInput type="password" id="password" placeholder="Enter your password here" {...register("password")}></StyleInput>
            <StyleError $fontSize="md">{errors.password?.message}</StyleError>

            <StyleLabel htmlFor="confirmPassword" $labelSize="md">Confirm password</StyleLabel>
            <StyleInput type="password" id="confirmPassword" placeholder="Enter your password again" {...register("confirmPassword")}></StyleInput>
            <StyleError $fontSize="md">{errors.confirmPassword?.message}</StyleError>

            <StyleLabel htmlFor="bio" $labelSize="md">Bio</StyleLabel>
            <StyleInput type="text" id="bio" placeholder="Talk about you" {...register("bio")}></StyleInput>
            <StyleError $fontSize="md">{errors.bio?.message}</StyleError>

            <StyleLabel htmlFor="contact" $labelSize="md">Contact</StyleLabel>
            <StyleInput type="text" id="contact" placeholder="Enter your contact here" {...register("contact")}></StyleInput>
            <StyleError $fontSize="md">{errors.contact?.message}</StyleError>

            <StyleSelect {...register("course_module")}>
                <option value={""}>Select Module</option>
                <option value={"Primeiro módulo (Introdução ao Frontend)"}>Fisrt module</option>
                <option value={"Segundo módulo (Frontend Avançado)"}>Second module</option>
                <option value={"Terceiro módulo (Introdução ao Backend)"}>Three module</option>
                <option value={"Quarto módulo (Backend Avançado)"}>Four module</option>
            </StyleSelect>
            <StyleError $fontSize="md">{errors.course_module?.message}</StyleError>

            <StyleButtonRegister $buttonGround="solid"  $buttoSize="md" type="submit">Register</StyleButtonRegister>
        </ContainerFormRegister>,
        <div>
            <ToastContainer />
        </div>
    </>
        
    )
}