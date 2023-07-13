import { Header } from "../../components/Header"
import { UserFormRegister } from "../../components/FormRegister/index"
import { ContainerRegister } from "../UserRegister/style"

export const Register = ({ setList }) => {
    return(
        <ContainerRegister>
           <Header />
           
           <UserFormRegister setList={setList}/>
        </ContainerRegister>
    )
}