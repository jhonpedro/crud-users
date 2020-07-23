import React from "react"
import { LoginContainer, LoginContent, LoginDiv, DivButtons, LoginForm } from "./style"

import { SpanPacifico } from "../../components/Header/style"

import Input from "../../components/Inputs"
import Button from "../../components/Button"

function Login () {

    return (
        <LoginContainer>
            <LoginContent>
                <LoginDiv>
                    <LoginForm>
                        <Input placeholder={ "E-mail" } />
                        <Input placeholder={ "Senha" } type="password" />
                        <DivButtons>
                            <Button value={ "Criar conta" } />
                            <Button value={ "Entrar" } />
                        </DivButtons>
                    </LoginForm>
                </LoginDiv>
            </LoginContent>
        </LoginContainer>
    )

}

export default Login