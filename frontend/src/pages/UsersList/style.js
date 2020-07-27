import styled, { css } from "styled-components"
import Input from "../../components/Inputs"
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
    padding-top: 30px;
    width: 60%;
    margin: 0 auto;
`

export const Content = styled.div`
    border: none;
    position: relative;
`

export const ContentData = styled.div`
    color: black;
    font-weight: 600;
    position: relative;
    z-index: 1;

    border-radius: 15px;
    padding: 15px;
    background-color: ${color.darker};
    font-size: 0.9rem;
    width: 100%;
    transition: margin-bottom linear 300ms;

    display: flex;
    justify-content: space-between;
    ${props => {
        if (props.showToEdit) {
            return css`margin-bottom: 35px;`
        }
    }}
`

export const ContentEditUser = styled.div`
    color: black;
    font-size: 0.9rem;
    font-weight: 600;
    background-color: ${color.darker};
    width: 100%;
    padding: 0px;
    border-radius: 15px;
    transition: linear 300ms;
    z-index: 0;

    position: absolute;
    top: 0;
    left: 0;

    ${props => {
        if (props.showToEdit) {
            return css`
                top: 20px; 
                padding: 40px 15px 5px 15px; 
                background-color: ${color.light_grey};
            `
        }
    }}
    
`

export const ContentEditUserForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
export const ContentEditUserInput = styled(Input)`
    padding: 8px;
    font-size: 0.8rem;
    margin: 0;
    background-color: ${color.darker};
    color: ${color.light_grey};
`
