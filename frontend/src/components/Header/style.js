import styled from "styled-components"
import colors from "../../style/colors"

export const HeaderContainer = styled.header`
    padding: 15px;
`
export const HeaderContent = styled.div`
    background-color: ${colors.light_dark};
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
`
export const SpanLowRoboto = styled.span`
    font-size: 0.9rem;
`

export const SpanPacifico = styled.span`

    @import url('https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap');

    font-family: "Leckerli One", cursive;
    font-size: 1.7rem;
    display: inline-block;
    margin-left: 20px;
    font-weight: lighter;
    text-align: center;
`