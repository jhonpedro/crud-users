import React, { useState, useEffect } from "react"
import Api from "../../services/Api"
import { useParams, useHistory, Link } from "react-router-dom"
import { toast } from "react-toastify"

import { Container, Content, Div, Labels, DivButtons } from "./style"
import Button from "../../components/Button"
import colors from "../../style/colors"

function User () {

    const [userPage, setUserPage] = useState()
    const history = useHistory()
    const { id } = useParams()

    useEffect(() => {
        try {
            const token = localStorage.getItem("token")
            if (!token) return history.push("/Login?session=expired")

            Api.get(`/user/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then(response => {
                if (response.data.error) toast.warn(`Ocorreu um erro ao carregar esse usuário :(`)

                const userRes = response.data.data
                setUserPage(userRes)

                return
            })
        } catch (error) {
            return toast.warn(`Ocorreu um erro :( ${error}`)
        }
    }, [id, history])

    const handleBack = () => {
        return history.goBack()
    }

    return (
        <Container>
            <Content>
                <Div>
                    { userPage ? (
                        <React.Fragment>
                            <Labels name="Nome: ">
                                { userPage.name }
                            </Labels>
                            <Labels name="E-mail: ">
                                { userPage.email }
                            </Labels>

                        </React.Fragment>
                    ) : "No user found :(" }
                </Div>
                <DivButtons>
                    <Button value="Voltar" background_color={ colors.yellow } onClick={ handleBack } />
                    <Link to={ `/Users#user${id}` }>
                        <Button value="Editar" background_color={ colors.purple } color="white" />
                    </Link>
                </DivButtons>
            </Content>
        </Container>
    )
}

export default User