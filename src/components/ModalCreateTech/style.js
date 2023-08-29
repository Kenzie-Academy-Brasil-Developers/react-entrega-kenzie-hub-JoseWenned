import { styled } from "styled-components";

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

    width: 400px;
    height: 310px;
    margin: 0 1rem;

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