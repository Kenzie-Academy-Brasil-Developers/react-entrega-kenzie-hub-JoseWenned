import { css, styled } from "styled-components"

export const Label = css`
    font-family: var(--font-primary);
    color: var(--color-gray-0);

    ${({$labelSize}) => {
        switch($labelSize){
            case "md":
                return css`
                    font-size: 0.75rem;
                    weight: 400; 
                `
            case "lg":
                return css`
                    font-size: 1rem;
                    font-weight: 400;
                `    
        }
    }}

`

export const StyleLabel = styled.label`
    ${Label}
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    position: relative;
    left: 3.5%;
`

export const StyleLabelModal = styled.label`
    ${Label}
    color: var(--color-gray-0);

    margin-top: 0.5rem;
    margin-left: 3%;
`
export const StyleLabelSelectModal = styled.label`
    ${Label}
    color: var(--color-gray-0);

    margin-top: 1rem;
    margin-left: 3%;
`