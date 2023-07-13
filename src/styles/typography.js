import { styled, css } from "styled-components"

export const TitleStyles = css`

    font-family: var(--font-primary);
    color: var(--color-gray-0);
    font-size: var(--font-size-01);


    ${({$fontSize}) => {
        switch($fontSize){
            case "md":
                return css`
                    font-size: 0.75rem;
                    font-weight: 700;
                `
            case "lg":
                return css`
                    font-size: 1rem;
                    font-weight: 700;
                `
             case "xl":
                return css`
                    font-size: 1.5rem;
                    font-weight: 700;
                `      
        }
    }}
`
export const StyledTitleOne = styled.h1`

    ${TitleStyles};
`

export const StyledTitleTwo = styled.h2`

    ${TitleStyles};
    color: var(--color-primary);
    margin-top: 4rem;
`

export const StyledTitleThree = styled.h3`

    ${TitleStyles};
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`

export const StyleTitleHeader = styled.h2`
    ${TitleStyles};
    color: var(--color-primary);
`
export const StyleTech = styled.h3`
    ${TitleStyles};
`
export const StyleTitleTech = styled.h2`
    ${TitleStyles};
`
export const StyleRegisterTechnology = styled.h2`
    ${TitleStyles};
    margin-left: 0.5rem;
`



export const StyledParagraph = css`

     font-family: var(--font-primary);
     color: var(--color-gray-01);
     line-height: 1.6;
     font-weight: 400;

     strong{
        font-weight: 700;
     }

     ${({$fontSize}) => {
        switch($fontSize){
            case "md":
                return css`
                    font-size: 0.7rem;
                `
            default:
                return css`
                    font-size: 1rem;
                `    
        }
    }}

`

export const StyleParagraph = styled.p`
    ${StyledParagraph}
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

export const StyleError = styled.p`
    ${StyledParagraph}
    margin-left: 0.75rem;
    margin-bottom: 0.5rem;
`
export const StyleParagraphTech = styled.p`
    ${StyledParagraph}
`
