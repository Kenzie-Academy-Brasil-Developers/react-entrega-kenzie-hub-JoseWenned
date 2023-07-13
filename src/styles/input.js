import { styled, css } from "styled-components"

export const StyledInput = css`
    background-color: var(--color-gray-02);
    border: 0.067rem solid var(--color-gray-02);

    height: 2.5rem;
    width: 92%;

    
    margin: auto;
    border-radius: 3px;
    padding-left: 0.5rem 0.5rem;
`
export const StyleInput = styled.input`
    ${StyledInput}
    color: var(--color-gray-0);
`
export const StyleInputModal = styled.input`
    ${StyledInput}
    margin-top: 1rem;
    color: var(--color-gray-0);
`