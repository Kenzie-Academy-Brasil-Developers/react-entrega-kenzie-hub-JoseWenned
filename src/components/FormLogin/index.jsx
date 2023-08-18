
import { StyleButtonEnter, StyleButtonRegisterPage } from "../../styles/button"
import { ContainerFormLogin } from "../FormLogin/style.js"
import { StyleLabel } from "../../styles/label"
import { StyledTitleThree, StyleError } from "../../styles/typography"
import { StyleInput } from "../../styles/input"
import { StyleParagraph } from "../../styles/typography"
import { ToastContainer } from "react-toastify"
 
export const UserFormLogin = ( { submit, handleSubmit, register, errors } ) => {

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

             <ToastContainer />
        </>
      
    )
}