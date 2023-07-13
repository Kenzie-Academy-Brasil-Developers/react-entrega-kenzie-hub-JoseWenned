import React from "react"
import { StyledParagraph, StyledTitleThree } from "../../styles/typography"
import { ContainerUserItem } from "../UserItem/style"

export const UserItem = ({ userName, course_module }) => {
    return(
        <ContainerUserItem>
            <StyledTitleThree>{`Welcome ${userName}`}</StyledTitleThree>
            <StyledParagraph>{course_module}</StyledParagraph>
        </ContainerUserItem>
    )
}