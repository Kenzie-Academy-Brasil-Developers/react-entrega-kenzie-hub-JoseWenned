import { ContainerTech } from "../Tecnologias/style"
import { StyleTitleTechnology } from "../../styles/typography"
import { StyleAddTech } from "../../styles/button"
import { ListTechCard } from "./ListTechCard"
import { useContext } from "react"
import { ScrapContext } from "../../router/providers/ScrapTecnologia"
import { ModalEdit } from "../ModalEdit"
import { ModalCreateTech } from "../ModalCreateTech"

export const Tecnologia = () => {

    const { toggleModal, editScrap} = useContext(ScrapContext)

    return(
        <>
          
            <ContainerTech>
                <StyleTitleTechnology $fontSize="lg">Technologies</StyleTitleTechnology> 

                <StyleAddTech $buttonSize="lg" onClick={toggleModal}>+</StyleAddTech>
            </ContainerTech>
      

            <div>
                <ModalCreateTech/>
            </div>

            <div>
                <ListTechCard />
            </div>

            <div>
                { editScrap ? <ModalEdit /> : null}
            </div>
            
        </>
    )
}