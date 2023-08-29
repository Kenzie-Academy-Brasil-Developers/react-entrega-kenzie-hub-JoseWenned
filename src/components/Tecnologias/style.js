import { styled } from "styled-components";

export const ContainerTech = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    width: 90%;
    margin-top:2rem;
    
`

export const ContainerListTech = styled.ul`

    display: flex;
    justify-content: space-around;
    justify-items: center;

    margin-top: 1.875rem;
    margin-bottom: 1rem;
    height: 50%;
    gap: 50px;
    background-color: var(--color-gray-02);
    border-radius: .5rem;

`
export const ContainerItemTech = styled.li`

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 1rem;
    width: 90%;
    height: 50px;
    gap: 50px;
    padding: 2px 10px;
    background-color: var(--color-gray-03);
    border-radius: 0.25rem;

`