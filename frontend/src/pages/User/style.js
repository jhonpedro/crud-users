import React from "react"
import styled, { css } from "styled-components"
import colors from "../../style/colors"

export const Container = styled.div`
    padding-top: 100px;
`

export const Content = styled.div`
    width: 65%;
    height: 300px;
    background-color: ${colors.containers_background};
    border-radius: 15px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    position: relative; 
`

export const Div = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const StyleLabels = styled.div`
    color: black;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;

    span {
        font-size: 1.3rem;
        display: inline-block;
        margin-left: 10px;
    }
`

export const Labels = ({ name, children, ...rest }) => {
    return (
        <StyleLabels { ...rest }>{ name }  <span> { children }</span></StyleLabels>
    )
}

export const DivButtons = styled.div`
    padding-top: 100px;
    display: flex;
    justify-content: space-between;
    color: black;
    position:absolute;
    bottom: 0;
    width: 100%;
    padding: 15px;
`