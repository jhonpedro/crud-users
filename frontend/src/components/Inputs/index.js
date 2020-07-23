import React from "react"
import { StyledInput } from "./style"

function Input ({ placeholder, ...rest }) {

    return (
        <StyledInput placeholder={ placeholder } { ...rest } />
    )

}

export default Input