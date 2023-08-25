import { BiEditAlt } from "react-icons/bi"
import { FaRegTrashAlt }  from "react-icons/fa"
import { useContext } from "react"
import { ScrapContext } from "../../../../router/providers/ScrapTecnologia"
import { ContainerItem, ContainerInformation, TitleTech, TitleLevel, ButtonTech } from "./style.js"

export const ItemTechCard =  () => {

    const { technology, deleteTech, setEditScrap } = useContext(ScrapContext)

    return(
        <>

           {technology.map((tech) => {
            return(
                <ContainerItem  key={tech.id}>
                    <div>
                        <TitleTech>{tech.title}</TitleTech>
                    </div>
                    
                    <ContainerInformation>
                        <TitleLevel>{tech.status}</TitleLevel>
                        <ButtonTech onClick={() => setEditScrap(tech)}><BiEditAlt/></ButtonTech> 
                        <ButtonTech onClick={() => deleteTech(tech.id)}><FaRegTrashAlt/></ButtonTech> 
                    </ContainerInformation>
                </ContainerItem>
                )
            })}
             
        </>
    )
}