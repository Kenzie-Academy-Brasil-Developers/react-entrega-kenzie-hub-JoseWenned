import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{ 
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --color-gray-04: #121214;
        --color-gray-03: #212529;
        --color-gray-02: #343B41;
        --color-gray-01: #868E96;
        --color-gray-0: #F8F9FA;

        --color-sucess: #3FE864;
        --color-error: #E83F5B;

        --font-primary: 'Inter', sans-serif;

        --font-size-01: 2rem;
    }
`