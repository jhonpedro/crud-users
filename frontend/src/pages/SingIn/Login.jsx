import React, { useState, useEffect } from "react"
import { useHistory, useLocation } from "react-router-dom"
import Api from "../../services/Api"
import { Container, Content, Div, DivButtons, Form } from "./style"

import Icon from "../../components/Icons"
import Input from "../../components/Inputs"
import Button from "../../components/Button"
import colors from "../../style/colors"
import { toast } from "react-toastify"

function Login () {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [createAcount, setCreateAcount] = useState(false)
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        if (location.search) {
            const search = location.search.toLowerCase().slice(1)
            const split = search.split("&")

            split.forEach(elem => {
                if (elem.includes("session")) {
                    const statusSession = elem.slice(elem.indexOf("=") + 1)
                    if (statusSession === "expired") {
                        toast.error(`Sua seção expirou! Faça o login novamente`, { position: toast.POSITION.BOTTOM_CENTER, autoClose: 10000 })
                    }
                }
            })

        }
    }, [])

    const handleSubmit = async event => {
        try {
            event.preventDefault()

            const response = await Api.post("/authenticate", { email, password })

            if (response.data.error) {
                throw response.data.message
            } else {
                localStorage.setItem("token", response.data.token)
                history.push("/Users")
                return
            }
        } catch (error) {
            toast.warn(`Opa, alguma coisa está errada: ${error}`)
            return
        }


    }

    const handleNewAcountSubmit = async event => {
        try {
            event.preventDefault()

            const response = await Api.post("/create-user", { email: newEmail, name: newName, password: newPassword })

            if (response.data.error) {
                throw response.data.message
            } else {
                toast.success("Conta criada com sucesso!")
                setTimeout(() => { setCreateAcount(false) }, 2000)
                return
            }
        } catch (error) {
            toast.warn(`Erro na criação da conta! erro: ${error}`)
            return
        }

    }

    const handleAdd = (event, inputToChange) => {
        if (inputToChange === "email") {
            setEmail(event.target.value)
        }
        if (inputToChange === "password") {
            setPassword(event.target.value)
        }
        if (inputToChange === "newName") {
            setNewName(event.target.value)
        }
        if (inputToChange === "newEmail") {
            setNewEmail(event.target.value)
        }
        if (inputToChange === "newPassword") {
            setNewPassword(event.target.value)
        }
    }

    return (
        <Container>
            <Content>
                { !createAcount ? (
                    <Div>
                        <Icon icon="user" size="5em" />
                        <Form onSubmit={ handleSubmit }>
                            <Input
                                placeholder={ "E-mail" }
                                onChange={ (event) => handleAdd(event, "email") }
                                value={ email } type="email" />
                            <Input
                                placeholder={ "Senha" }
                                type="password"
                                onChange={ (event) => handleAdd(event, "password") }
                                value={ password } />
                            <DivButtons>
                                <Button value={ "Criar conta" } onClick={ () => setCreateAcount(true) } background_color={ colors.red } />
                                <Button value={ "Entrar" } type="submit" background_color={ colors.yellow } />
                            </DivButtons>
                        </Form>
                    </Div>
                ) : (
                        <Div>
                            <Icon icon="newUser" size="5em" />
                            <Form onSubmit={ handleNewAcountSubmit }>
                                <Input placeholder={ "Digite seu nome" } onChange={ event => handleAdd(event, "newName") } value={ newName } />
                                <Input placeholder={ "Digite seu E-mail" } onChange={ event => handleAdd(event, "newEmail") } value={ newEmail } type="email" />
                                <Input placeholder={ "Digite uma senha" } onChange={ event => handleAdd(event, "newPassword") } value={ newPassword } type="password" />
                                <DivButtons>
                                    <Button value={ "Já tem uma conta?" } onClick={ () => setCreateAcount(false) } background_color={ colors.orange } />
                                    <Button value={ "Criar a conta" } type="submit" background_color={ colors.red } />
                                </DivButtons>
                            </Form>
                        </Div>
                    ) }

            </Content>
        </Container>
    )

}

export default Login