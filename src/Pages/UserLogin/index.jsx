import { StyledTitleTwo } from "../../styles/typography.js"
import { UserFormLogin } from "../../components/FormLogin"
import { ContainerLogin } from "./style"

export const Login = () => {
    return(
        <ContainerLogin>
            <StyledTitleTwo $fontSize="xl">Kenzie Hub</StyledTitleTwo>
            
            <UserFormLogin />
        </ContainerLogin>
    )
}