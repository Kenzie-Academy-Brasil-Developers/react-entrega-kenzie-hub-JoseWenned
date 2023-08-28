import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api"
import { useForm } from "react-hook-form"

export const ScrapContext = createContext({})

export const ScrapProvider = ( { children } ) => {

    const [ isOpen, setIsOpen ] = useState(false)
    const { register, handleSubmit, reset } = useForm()
    const [ technology, setTechnology ] = useState([])
    const [ editScrap, setEditScrap ] = useState(null)

    useEffect(() => {
        const getScrap = async () => {

            const token = localStorage.getItem("@TOKEN");

            try {
                const { data } = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                
                setTechnology(data.techs)
               
            } catch (error) {
                console.log(error)
            }
        }

        getScrap()
    }, [])

    const createTech = async (formData) => {

        const token = localStorage.getItem("@TOKEN");

        try{
        
            const { data } = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            setTechnology([...technology, data])
            localStorage.setItem("@SAVEDTECHNOLOGY", JSON.stringify([...technology, data]))

        }catch (error) {

            console.log(error)
            localStorage.removeItem("@TOKEN")

        }

    }

    const deleteTech = async (techId) => {

        const token = localStorage.getItem("@TOKEN");

        try {

            await api.delete(`/users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const UpdatedTechs = technology.filter((tech) => tech.id !== techId)
            setTechnology(UpdatedTechs)
            localStorage.setItem("@SAVEDTECHNOLOGY", JSON.stringify(UpdatedTechs))
         

        } catch (error) {

            console.log(error)
            localStorage.removeItem("@TOKEN")

        }
    }

    const UpDateTech = async (formData) => {

        const token = localStorage.getItem("@TOKEN");

        try {
            const { data } = await api.put(`/users/techs/${editScrap.id}`, formData, {
                headers: {
                    Authorization: ` Bearer ${token}`
                }
            })

            const newUpDate = technology.map((scrap) => {
                if(scrap.id === editScrap.id){
                    return data
                } else {
                    return scrap
                }
            })

            setTechnology(newUpDate)
            setEditScrap(null)

        } catch (error) {
            console.log()
        }
    }

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const CloseModalEdit = () => {
        setEditScrap(null)
    }

    return(
        <ScrapContext.Provider value={ { 

            register, 
            handleSubmit, 
            isOpen, 
            toggleModal, 
            technology, 
            setTechnology, 
            createTech, 
            reset, 
            deleteTech,
            setEditScrap,
            editScrap,
            CloseModalEdit,
            UpDateTech,

            }}>

            { children }
        </ScrapContext.Provider>
    )
}