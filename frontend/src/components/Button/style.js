import styled, { css } from "styled-components"

export const StyledButton = styled.button`
    border: none;
    background-color: #FF5C00;
    padding: 10px;
    color: black;
    border-radius: 15px;
    font-size: 0.9rem;

    ${({ background_color }) => {
        if (background_color) {
            return css`background-color: ${background_color};`
        }
    }}
    ${({ color }) => {
        if (color) {
            return css`color: ${color};`
        }
    }}
`