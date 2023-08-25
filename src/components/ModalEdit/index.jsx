import { ModalOverlay, Modal, HeaderModal, FormModal } from "../Tecnologias/style"
import { StyleRegisterTechnology } from "../../styles/typography"
import { StyleCloseModal, StyleButtonRegister } from "../../styles/button"
import { StyleLabelModal, StyleLabelSelectModal } from "../../styles/label"
import { StyleInputModal } from "../../styles/input"
import { StyleSelect } from "../../styles/select"
import { useContext } from "react"
import { ScrapContext } from "../../router/providers/ScrapTecnologia"
import { useForm } from "react-hook-form"

export const ModalEdit = () => {

    const { CloseModalEdit,  editScrap, UpDateTech } = useContext(ScrapContext)

    const { register, handleSubmit, reset } = useForm({
        values: {
            title: editScrap.title,
            status: editScrap.status
        }
    })

    const submit = (formData) => {

        UpDateTech(formData)
        reset()

    }

    return(
        <>
            <div>
                <ModalOverlay onSubmit={handleSubmit(submit)}>
                    <Modal>
                        <HeaderModal>
                            <StyleRegisterTechnology $fontSize="lg">Edit technology</StyleRegisterTechnology>

                            <StyleCloseModal type="submit" onClick={() => CloseModalEdit()}>X</StyleCloseModal>
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

                            <StyleButtonRegister type="submit">Save editions</StyleButtonRegister>
                        </FormModal>
                    </Modal>
                </ModalOverlay>
            </div>
        </>
    )
}