import React from "react"
import { StyledButton } from "./style"

function Button ({ value, ...rest }) {
    return (

        <StyledButton { ...rest } >{ value }</StyledButton>

    )
}

export default Button