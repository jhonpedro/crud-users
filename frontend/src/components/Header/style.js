import styled from "styled-components"
import colors from "../../style/colors"

export const HeaderContainer = styled.header`
    padding: 15px;
`
export const HeaderContent = styled.div`
    background-color: ${colors.containers_background};
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 15px;
    border-radius: 15px;
`

export const DivSides = styled.div`
    color: ${colors.orange};
`

export const SpanHighRoboto = styled.span`
    font-size: 1.7rem;

    span {
        font-size: 0.9rem;
    }
`

export const SpanCursive = styled.span`

    font-family: Pacifico, cursive;
    font-size: 2rem;
    display: inline-block;
    margin-left: 20px;
    font-weight: lighter;
    text-align: center;
`

export const Color = styled.span`
    color: ${({ color }) => {
        if (color === "red") return colors.red
        if (color === "yellow") return colors.yellow
        if (color === "blue") return colors.blue
        if (color === "purple") return colors.purple
    }};
`