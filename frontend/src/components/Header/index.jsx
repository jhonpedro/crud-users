import React from "react"
import { HeaderContainer, DivSides, SpanHighRoboto, HeaderContent, SpanCursive, Color } from "./style"

function Header () {
    return (
        <HeaderContainer>
            <HeaderContent>
                <DivSides>
                    <Color color="red">
                        <SpanHighRoboto>
                            C
                            <span>reate</span>
                        </SpanHighRoboto>
                    </Color>
                    <Color color="yellow">
                        <SpanHighRoboto>
                            R
                            <span>ead</span>
                        </SpanHighRoboto>
                    </Color>
                    <Color color="blue">
                        <SpanHighRoboto>
                            U
                            <span>update</span>
                        </SpanHighRoboto>
                    </Color>
                    <Color color="purple">
                        <SpanHighRoboto>
                            D
                            <span>elete</span>
                        </SpanHighRoboto>
                    </Color>
                    <SpanCursive>Users</SpanCursive>
                </DivSides>
            </HeaderContent>
        </HeaderContainer>
    )

}

export default Header