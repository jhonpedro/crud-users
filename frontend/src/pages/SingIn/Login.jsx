import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import Api from "../../services/Api"
import { SingInContainer, SingInContent, SingInDiv, DivButtons, SingInForm } from "./style"

import Icon from "../../components/Icons"
import Input from "../../components/Inputs"
import Button from "../../components/Button"
import { toast } from "react-toastify"

function Login () {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [createAcount, setCreateAcount] = useState(false)
    const history = useHistory()

    const handleSubmit = async event => {
        event.preventDefault()

        const response = await Api.post("/authenticate", { email, password })

        if (response.data.error) {
            toast.warn(`Wow, we got some error: ${response.data.message}`)
        } else {
            localStorage.setItem("token", response.data.token)
            history.push("/Users")
        }


    }

    const handleAdd = (event, inputToChange) => {
        if (inputToChange === "email") {
            setEmail(event.target.value)
        }
        if (inputToChange === "password") {
            setPassword(event.target.value)
        }
    }

    return (
        <SingInContainer>
            <SingInContent>
                { !createAcount ? (
                    <SingInDiv>
                        <Icon icon="user" size="5em" />
                        <SingInForm onSubmit={ handleSubmit }>
                            <Input placeholder={ "E-mail" } onChange={ (event) => handleAdd(event, "email") } />
                            <Input placeholder={ "Senha" } type="password" onChange={ (event) => handleAdd(event, "password") } />
                            <DivButtons>
                                <Button value={ "Criar conta" } onClick={ () => setCreateAcount(true) } />
                                <Button value={ "Entrar" } type="submit" />
                            </DivButtons>
                        </SingInForm>
                    </SingInDiv>
                ) : (
                        <SingInDiv>
                            teest
                        </SingInDiv>
                    ) }

            </SingInContent>
        </SingInContainer>
    )

}

export default Login