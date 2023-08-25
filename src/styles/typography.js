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
    margin: 1rem auto;

`

export const StyleTitleHeader = styled.h2`
    ${TitleStyles};
    color: var(--color-primary);
`
export const StyleTitleTechnology = styled.h2`
     ${TitleStyles};
     color: var(--color-gray-0);
`

export const StyleTech = styled.h3`
    ${TitleStyles};
`
export const StyleTitleTech = styled.h2`
    ${TitleStyles};
`
export const StyleloadUser = styled.h2`
    ${TitleStyles};
    margin-top: 1.5rem;
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
    ${StyledParagraph};
    margin: 1rem auto;

`

export const StyleError = styled.p`
    ${StyledParagraph}
    margin-left: 0.75rem;
    margin-bottom: 0.5rem;
`
export const StyleParagraphTech = styled.p`
    ${StyledParagraph}
`

export const StyleParagraphCourse = styled.p`
    ${StyledParagraph}
    margin-top: 1.5rem;
    margin-right: 0.5rem;
`