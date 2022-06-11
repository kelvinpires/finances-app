import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: var(--dark-bg);
        
        height: 100vh;
        color: var(--white);
    }

    html {
        font-size: 62.5%;
        font-family: 'Inter', sans-serif;
        font-family: 'Roboto', sans-serif;
        @media screen and (max-width: 768px) {
            font-size: 50%;
        }
    }


    :root {
        --purple: #8261D9;
        --white: #FAFAFA;
        --green: #00CD73;
        --red: #F60A20;
        --text: #404040;
        --light-bg: #E5E5E5;
        --dark-bg: #1d1d1d;
        --orange: #FF941A;
    }
`;
