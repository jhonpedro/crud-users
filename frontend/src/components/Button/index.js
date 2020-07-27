import React from "react"
import { StyledButton } from "./style"

function Button ({ value, children: Component, ...rest }) {
    return (

        <StyledButton { ...rest } >{ value } { Component ? Component : null } </StyledButton>

    )
}

export default Button