
import { Header } from "../../components/Header"
import { Tecnologia } from "../../components/Tecnologias"
import { UserItem } from "../../components/UserItem"
import { ContainerHomePage }from "../HomePage/style"
import { ContainerList } from "../HomePage/style"

export const Home = () => {

    return(
        
        <ContainerHomePage>

            <Header />

            <ContainerList>
                <UserItem />
            </ContainerList>
            
            <Tecnologia />
            
        </ContainerHomePage>
        
    )
}