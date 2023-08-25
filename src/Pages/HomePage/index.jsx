
import { Header } from "../../components/Header"
import { Tecnologia } from "../../components/Tecnologias"
import { UserItem } from "../../components/UserItem"
import { ContainerHomePage }from "../HomePage/style"
import { ContainerList, ContainerUserInformation } from "../HomePage/style"

export const Home = () => {

    return(

        <>
            <ContainerHomePage>

                <Header />

                <ContainerList>

                    <ContainerUserInformation>
                        <UserItem />
                    </ContainerUserInformation>

                </ContainerList>

                <Tecnologia />

            </ContainerHomePage>
        </>
        
    )
}