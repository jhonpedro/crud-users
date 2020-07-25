import styled from "styled-components"
import colors from "../../style/colors"

export const HeaderContainer = styled.header`
    padding: 15px;
`
export const HeaderContent = styled.div`
    background-color: ${colors.darker};
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

    font-family: cursive;
    font-size: 1.7rem;
    display: inline-block;
    margin-left: 20px;
    font-weight: lighter;
    text-align: center;
`