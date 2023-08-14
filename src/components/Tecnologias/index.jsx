import { ContainerTech, ContainerListTech, ContainerItemTech, ModalOverlay, Modal, HeaderModal, FormModal  } from "../Tecnologias/style"
import { StyleTech, StyleParagraphTech, StyleTitleHeader, StyleRegisterTechnology} from "../../styles/typography"
import { StyleAddTech } from "../../styles/button"
import { useState } from "react"
import { api } from "../../services/api"
import { useForm } from "react-hook-form"
import { StyleCloseModal, StyleButtonRegister } from "../../styles/button"
import { StyleLabelModal, StyleLabelSelectModal } from "../../styles/label"
import { StyleInputModal } from "../../styles/input"
import { StyleSelect } from "../../styles/select"


export const Tecnologia = () => {

    const [ isOpen, setIsOpen ] = useState(false)
    const { register, handleSubmit, reset } = useForm()
    const [ technology, setTechnology ] = useState([])
    const [ token, setToken ] = useState(null)

    const onSubmit = async ( data ) => {
        
        try{
            const technologyData = {
                name: data.name,
                status: data.status
            }
    
            const response = await api.post("/users/techs", technologyData)
            console.log("Technology registered successfully!")
            
            const token = response.data.token
            setToken(token)
            localStorage.setItem("@TOKEN", token)
            
            setTechnology([...technology, technologyData])
            reset()

        } catch (error) {
            console.log("Failed to register technology:", error)
        }
    }

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <ContainerTech>
                <StyleTitleHeader $fontSize="lg">Technologies</StyleTitleHeader> 

                <StyleAddTech $buttonSize="lg" onClick={toggleModal}>+</StyleAddTech>
            </ContainerTech>

            <div>
                {isOpen && (
                    <ModalOverlay onSubmit={handleSubmit(onSubmit)}>
                        <Modal>
                            <HeaderModal>
                                <StyleRegisterTechnology $fontSize="lg">Register technology</StyleRegisterTechnology>

                                <StyleCloseModal type="submit" onClick={toggleModal}>X</StyleCloseModal>
                            </HeaderModal>

                            <FormModal>
                                <StyleLabelModal htmlFor="tech" $labelSize="md">Name</StyleLabelModal>
                                <StyleInputModal  type="text" id="tech" placeholder="Enter your Technology here" {...register("name", {required: true})}/>
                                
                                <StyleLabelSelectModal $labelSize="md" htmlFor="select">Select status</StyleLabelSelectModal>
                                <StyleSelect id="select" {...register("status", {required: true})}>
                                    <option value="beginner">beginner</option>
                                    <option value="intermediary">intermediary</option>
                                    <option value="advanced">advanced</option>
                                </StyleSelect>

                                <StyleButtonRegister type="submit">Register Technology</StyleButtonRegister>
                            </FormModal>
                        </Modal>
                    </ModalOverlay>
                )}
            </div>

            <ContainerListTech>
                {technology.map((technology, index) => {
                    <ContainerItemTech key={index}>
                        <StyleTech $fontSize="lg">{technology.name}</StyleTech>

                        <StyleParagraphTech $fontSize="lg">{technology.status}</StyleParagraphTech>
                    </ContainerItemTech>
                })}
            </ContainerListTech>
            
        </>
    )
}