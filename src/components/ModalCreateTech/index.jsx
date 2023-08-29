import { ModalOverlay, Modal, HeaderModal, FormModal } from "../ModalCreateTech/style"
import { StyleRegisterTechnology } from "../../styles/typography"
import { StyleCloseModal, StyleButtonRegister } from "../../styles/button"
import { StyleLabelModal, StyleLabelSelectModal } from "../../styles/label"
import { StyleInputModal } from "../../styles/input"
import { StyleSelect } from "../../styles/select"
import { useContext } from "react"
import { ScrapContext } from "../../router/providers/ScrapTecnologia"

export const ModalCreateTech = () => {

    const { isOpen, register, handleSubmit, toggleModal, createTech, reset} = useContext(ScrapContext)

    const submit = (formData) => {

        createTech(formData)
        reset()
        
    }

    return (
        <>
            <div>
                {isOpen && (
                    <ModalOverlay onSubmit={handleSubmit(submit)}>
                        <Modal>
                            <HeaderModal>
                                <StyleRegisterTechnology $fontSize="lg">Register technology</StyleRegisterTechnology>

                                <StyleCloseModal type="submit" onClick={() => toggleModal()}>X</StyleCloseModal>
                            </HeaderModal>

                            <FormModal>
                                <StyleLabelModal htmlFor="tech" $labelSize="md">Name</StyleLabelModal>
                                <StyleInputModal  type="text" id="tech" placeholder="Enter your Technology here" {...register("title", {required: true})}/>
                                
                                <StyleLabelSelectModal $labelSize="md" htmlFor="select">Select status</StyleLabelSelectModal>
                                <StyleSelect id="select" {...register("status", {required: true})}>
                                    <option value="">Select level</option>
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
        </>
    )
}