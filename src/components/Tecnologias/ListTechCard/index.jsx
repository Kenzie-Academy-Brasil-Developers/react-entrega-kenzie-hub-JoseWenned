import { ItemTechCard } from "./ItemTechCard"
import { Container, ContainerUl } from "./style.js"

export const ListTechCard = () => {

    return(
        <>
            <Container>
                <ContainerUl>
                    <ItemTechCard />  
                </ContainerUl>
            </Container>
        </>
    )
}