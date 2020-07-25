import styled from "styled-components"
import color from "../../style/colors"

export const Container = styled.div`
    padding-top: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const ContentWrapper = styled.div`
    padding: 25px;
    width: 50%;
    margin: 0 auto;
`

export const Content = styled.div`
    border: none;
    border-radius: 15px;
    padding: 15px;
    background-color: ${color.darker};

    display: flex;
    justify-content: space-between;

    span {
        color: black;
        font-size: 0.9rem;
        font-weight: 600;
    }
`
