import { styled } from "styled-components"

export const ContainerFormRegister = styled.form`
     
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 1rem;

    width: 93%;
    height: 100vh;

    background-color: var(--color-gray-03);
    padding: 5px 0;
    border-radius: 0.25rem;

    @media (min-width: 568px) {
        width: 23.0625rem;
    }
    
`