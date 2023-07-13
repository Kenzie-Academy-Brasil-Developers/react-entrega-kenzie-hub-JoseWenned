import { Header } from "../../components/Header"
import { Tecnologia } from "../../components/Tecnologias"
import { UserList } from "../../components/UserList"
import { ContainerHomePage }from "../HomePage/style"
import { ContainerList } from "../HomePage/style"

export const Home = ({ userName, course_module }) => {
    return(
        
        <ContainerHomePage>

            <Header />

            <ContainerList>
                <UserList userName={userName} course_module={course_module}/>
            </ContainerList>
            
            <Tecnologia />
            
        </ContainerHomePage>
        
    )
}