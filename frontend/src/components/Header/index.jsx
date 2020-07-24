import React from "react"
import { HeaderContainer, DivSides, SpanHighRoboto, HeaderContent, SpanCursive } from "./style"

function Header () {
    return (
        <HeaderContainer>
            <HeaderContent>
                <DivSides>
                    <SpanHighRoboto>
                        C
                        <span>reate</span>
                        R
                        <span>ead</span>
                        U
                        <span>update</span>
                        D
                        <span>elete</span>
                    </SpanHighRoboto>
                    <SpanCursive>Users</SpanCursive>
                </DivSides>
            </HeaderContent>
        </HeaderContainer>
    )

}

export default Header