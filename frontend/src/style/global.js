import { createGlobalStyle } from "styled-components"
import "react-toastify/dist/ReactToastify.css"
import color from "./colors"

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, monospace;
    }
    html, body, #root {
        height: 100%;
        background-color: ${color.background_dark};
        color: white;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    button {
        cursor: pointer;
    }
    input:focus {
        outline-offset: 0;
    }
    :focus {
        outline: none;
    }
`
