import { styled } from "styled-components";

export const ContainerTech = styled.div`
    display: flex;
    justify-content: space-between;
    justify-items: center;

    margin-top: 2.875rem;
    width: 90%;
    
    
`
export const ContainerListTech = styled.ul`
    display: flex;
    justify-content: space-around;
    justify-items: center;

    margin-top: 1.875rem;
    width: 90%;
    height: 50%;
    gap: 50px;
    background-color: var(--color-gray-02);
    border-radius: 0.25rem;
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
export const ModalOverlay = styled.form`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: modal-slide-down 0.3s ease-in-out forwards;
`
export const Modal = styled.div`
    background-color: var(--color-gray-03);
    border-radius: 4px;

    width: 90%;
    height: 250px;
`
export const HeaderModal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--color-gray-02);
    width: 100%;
    height: 45px;
    border-radius: 0.25rem 0.25rem 0.25rem 0.25rem;
`
export const FormModal = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 1rem;
    
`