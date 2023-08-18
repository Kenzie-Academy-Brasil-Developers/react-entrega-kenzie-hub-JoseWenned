
import { StyleTitleHeader } from "../../styles/typography.js"
import { StyledLink } from "../../styles/button.js"
import { ContainerHeader } from "../Header/style.js"
import { useContext } from "react"
import { UserContext } from "../../router/providers/UserContext.jsx"

export const Header = () => {

    const { handleLogout } = useContext(UserContext)

    return(
        <ContainerHeader>
            <StyleTitleHeader $fontSize="xl">Kenzie Hub</StyleTitleHeader>

            <StyledLink  $buttonGround="link" $buttonSize="md" to={"/Login"} onClick={handleLogout}>Exit</StyledLink>
        </ContainerHeader>
    )
}