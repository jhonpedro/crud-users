import React from "react"
import { HeaderContainer, DivSides, SpanHighRoboto, SpanLowRoboto, HeaderContent, SpanPacifico } from "./style"

function Header () {
    return (
        <HeaderContainer>
            <HeaderContent>
                <DivSides>
                    <SpanHighRoboto>C</SpanHighRoboto>
                    <SpanLowRoboto>rud</SpanLowRoboto>
                    <SpanHighRoboto>R</SpanHighRoboto>
                    <SpanLowRoboto>ead</SpanLowRoboto>
                    <SpanHighRoboto>U</SpanHighRoboto>
                    <SpanLowRoboto>pdate</SpanLowRoboto>
                    <SpanHighRoboto>D</SpanHighRoboto>
                    <SpanLowRoboto>elete</SpanLowRoboto>
                    <SpanPacifico className="Pacifico">Users</SpanPacifico>
                </DivSides>
            </HeaderContent>
        </HeaderContainer>
    )

}

export default Header