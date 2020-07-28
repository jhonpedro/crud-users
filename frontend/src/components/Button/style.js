import styled, { css } from "styled-components"
import color from "../../style/colors"

export const StyledButton = styled.button`
    border: none;
    background-color: #FF5C00;
    padding: 10px;
    color: ${color.darker};
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