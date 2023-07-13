
import { StyleTitleHeader } from "../../styles/typography.js"
import { StyledLink } from "../../styles/button.js"
import { ContainerHeader } from "../Header/style.js"

export const Header = () => {

    const handleLogout = () => {
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
        setUserName("")
        setLoggedIn(false)
    }
    

    return(
        <ContainerHeader>
            <StyleTitleHeader $fontSize="xl">Kenzie Hub</StyleTitleHeader>

            <StyledLink  $buttonGround="link" $buttonSize="md" to={"/Login"} onClick={handleLogout}>Exit</StyledLink>
        </ContainerHeader>
    )
}