import React, { useContext } from "react"
import { StyleParagraphCourse, StyleloadUser } from "../../styles/typography"
import { ContainerUserItem } from "./style"
import { UserContext } from "../../router/providers/UserContext"

export const UserItem = () => {

    const { user } = useContext(UserContext)

    return(
        <>  
            <ContainerUserItem >

             
                    <div>
                        <StyleloadUser>Hello, {user?.name}</StyleloadUser>
                    </div>
                    <div>
                        <StyleParagraphCourse>{user?.course_module}</StyleParagraphCourse>
                    </div>
           

            </ContainerUserItem>
        </>
        
    )
}