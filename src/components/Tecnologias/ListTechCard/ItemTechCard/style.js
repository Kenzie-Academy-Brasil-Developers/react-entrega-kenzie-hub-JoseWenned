import { styled } from "styled-components";

export const ContainerItem = styled.li`

    background-color: var(--color-gray-04);
    height: 49px;
    width: 85vw;
    max-width: 68.75rem;
    margin-top: 1rem;
    list-style: none;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: .25rem;

`

export const ContainerInformation = styled.div`

    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    margin-right: 0.5rem;

`

export const TitleTech = styled.h3`

    margin-left: 0.5rem;
    color: var(--color-gray-0);
    font-family: var(--font-primary);
    font-size: var(--font-size-02);

`

export const TitleLevel = styled.p`

    font-size: var(--font-size-03);
    font-family: var(--font-primary);
    color: var(--color-gray-01);
    margin-top: 0.2rem;

`

export const ButtonTech = styled.span`

    color: var(--color-gray-0);
    cursor: pointer;

`

