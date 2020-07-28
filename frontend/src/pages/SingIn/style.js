import styled from "styled-components"
import color from "../../style/colors"

export const Container = styled.div`
    margin: 0 auto;
    padding-top: 100px;
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`

export const Div = styled.div`
    width: 65%;
    height: 350px;
    background-color: ${color.containers_background};
    border-radius: 15px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    opacity: 1;
    transition: opacity 300ms;

    .opacity1{
        opacity: 0;
    }
    .opacity2{
        opacity: 1;
    }
`

export const Form = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
`

export const DivButtons = styled.div`
    display: flex;
    justify-content: space-between;
`