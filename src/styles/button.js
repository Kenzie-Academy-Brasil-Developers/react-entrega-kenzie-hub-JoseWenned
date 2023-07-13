import { Link } from "react-router-dom"
import { css, styled } from "styled-components"

export const ButtonStyles = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    font-family: var(--font-primary);
    font-weight: 500;

    border-radius: 0.25rem;

    transition: .4s;

    ${({$buttonSize}) => {
        switch($buttonSize){
            case "md":
                return css`
                    font-size: 0.75rem;
                    font-weight: 500;
                `
            case "lg":
                return css`
                    font-size: 1rem;
                    font-weight: 700;
                `
             case "xl":
                return css`
                    font-size: 2rem;
                    font-weight: 700;
             
                `    
        }
    }}

    ${({$buttonGround}) => {
        switch($buttonGround){
            case "solid":
                return css`
                    background-color: var(--color-primary);
                    color: var(--color-gray-01);

                    &:hover{
                        filter: brigthness(1.15)
                    }
                 `
            case "outline": 
                return css`
                    border: 0.063rem solid var(--color-primary);
                    color: var(--color-gray-01);

                    &:hover{
                       background-color: var(--color-primary);
                       color: var(--color-gray-01)
                    }
                ` 
            case "link":
                return css`
                    color: var(-color-gray-02);

                    &:hover{
                      text-decoration: underline;
                    }
                `   
        }
    }}
`

export const StyleButtonEnter = styled.button`
    ${ButtonStyles}

    background-color: var(--color-primary);

    width: 94%;
    height: 2.5rem;
    margin: auto;

    border: 2px solid var(--color-primary);
    color: var(--color-gray-0);
`

export const StyleButtonRegister = styled.button`
    ${ButtonStyles}

    background-color: var(--color-primary);

    width: 94%;
    height: 2.5rem;
    margin: auto;

    border: 2px solid var(--color-primary);
    color: var(--color-gray-0);
`

export const StyleButtonRegisterPage= styled(Link)`
    ${ButtonStyles}

    background-color: var(--color-gray-01);

    width: 94%;
    height: 2.5rem;
    margin: auto;
    margin-bottom: 1rem;

    border: 2px solid var(--color-gray-01);
    color: var(--color-gray-0);
    text-decoration: none;
`

export const StyledLink = styled(Link)`
    ${ButtonStyles}

    border: 2px solid var(--color-gray-02);
    padding: 0.5rem 1.5rem;

    background-color: var(--color-gray-02);
    color: var(--color-gray-0);
    text-decoration: none;
`

export const StyleAddTech = styled.button`
    ${ButtonStyles}

    background-color: var(--color-gray-03);
    color: var(--color-gray-0);
    border-radius: 0.25rem;
    border: 0.067rem solid var(--color-gray-03);

    width: 40px;
    height: 28px;
`
export const StyleCloseModal = styled.button`
    ${ButtonStyles}
    background-color: transparent;
    margin-right: 0.5rem;
    color: var(--color-gray-01);
    border: none;
`