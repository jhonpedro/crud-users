import styled from "styled-components"
import color from "../../style/colors"

export const StyledInput = styled.input`
    padding: 7px;
    background-color: ${color.background};
    color: black;
    border-radius: 20px;
    border: none;
    font-size: 1.1rem;
    margin: 15px 0;
    &:focus {
        box-shadow: 0 0 5px rgba(0,0,0,0.5);
        border: none;
    }
`