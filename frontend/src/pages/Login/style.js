import styled from "styled-components"
import color from "../../style/colors"

export const LoginContainer = styled.div`
    margin: 0 auto;
    padding-top: 100px;
`

export const LoginContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`

export const LoginDiv = styled.div`
    width: 65%;
    height: 350px;
    background-color: ${color.light_dark};
    border-radius: 15px;
    padding: 90px;
`

export const LoginForm = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

export const DivButtons = styled.div`
    display: flex;
    justify-content: space-between;
`