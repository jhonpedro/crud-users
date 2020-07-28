import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import Api from "../../services/Api"
import { toast } from "react-toastify"

import {
    Container,
    ContentWrapper,
    Content,
    ContentData,
    ContentEditUser,
    ContentEditUserForm,
    ContentEditUserInput
} from "./style"
import Button from "../../components/Button"
import Icon from "../../components/Icons"
import colors from "../../style/colors"

function UsersList () {

    const [usersList, setUsersList] = useState([])
    const history = useHistory()

    useEffect(() => {

        Api.get("/users", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => {
            const data = res.data

            if (data.error) return history.push("/Login?session=expired")

            const rawUserList = data.data.map(user => {
                return (
                    {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        createdAt: user.createdAt,
                        showToEdit: false,
                        editing: {
                            newName: "",
                            newEmail: "",
                            newPassword: "",
                            passwordToVerify: ""
                        }
                    }
                )
            })

            setUsersList(rawUserList)
        })
        return
    }, [])

    const handleShowToEdit = userId => {
        const newList = usersList.map(user => {
            if (user.id === userId) {
                if (user.showToEdit) {
                    return { ...user, showToEdit: false }
                }

                return { ...user, showToEdit: true }
            }

            return user
        })
        setUsersList(newList)
    }

    const handleEditSubmit = async (event, id) => {
        event.preventDefault()
        const userToEdit = usersList.find(user => user.id === id ? user : null)


        if (!userToEdit.editing.newName || !userToEdit.editing.passwordToVerify) return toast.warn("Alguns campos estão incompletos aparentemente")

        const response = await Api.post("/update-user", {
            newName: userToEdit.editing.newName,
            email: userToEdit.email,
            password: userToEdit.editing.passwordToVerify,
            newRawPassWord: userToEdit.editing.newPassword
        }, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })

        console.log(response)
        if (response.data.error) return toast.warn("Não foi possivel efetuar a atualização")

        toast.success("Atualização efetuada com sucesso!")
        setTimeout(() => {
            console.log("2 segundos depois")
            window.location.reload()
        }, 2000)
    }

    const handleDelete = async id => {
        const response = await Api.post(`/delete-user/?id=${id}`, {}, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })

        console.log(response)
        if (response.data.error) return toast.warn("Alguma coisa deu errado!")

        toast.success(`Usuário ${response.data.data.name} deletado !`)
        setTimeout(() => {
            window.location.reload()
        }, 2000)
    }

    const handleChange = (id, event, witchField) => {
        if (witchField === "newName") {
            const toSet = usersList.map(user => {
                if (user.id === id) {
                    return {
                        ...user,
                        editing: {
                            ...user.editing,
                            newName: event.target.value
                        }
                    }
                }
                return user
            })
            setUsersList(toSet)
        }
        if (witchField === "newPassword") {
            const toSet = usersList.map(user => {
                if (user.id === id) {
                    return {
                        ...user,
                        editing: {
                            ...user.editing,
                            newPassword: event.target.value
                        }
                    }
                }
                return user
            })
            setUsersList(toSet)
        }
        if (witchField === "passwordToVerify") {
            const toSet = usersList.map(user => {
                if (user.id === id) {
                    return {
                        ...user,
                        editing: {
                            ...user.editing,
                            passwordToVerify: event.target.value
                        }
                    }
                }
                return user
            })
            setUsersList(toSet)
        }
    }

    return (
        <Container>
            { usersList.map(user => (
                <ContentWrapper key={ user.id }>
                    <Content>
                        <ContentData showToEdit={ user.showToEdit }>
                            <span>{ user.name }</span>
                            <span>{ user.email }</span>
                            <span>{ user.createdAt }</span>
                            <span onClick={ () => handleShowToEdit(user.id) }>
                                <Icon icon="editUser" size="1.5em" color={ colors.blue } />
                            </span>
                        </ContentData>
                        <ContentEditUser showToEdit={ user.showToEdit }>
                            <ContentEditUserForm onSubmit={ (event) => handleEditSubmit(event, user.id) }>
                                <ContentEditUserInput
                                    placeholder={ user.name }
                                    onChange={ event => handleChange(user.id, event, "newName") }
                                    value={ user.editing.newName } />
                                <ContentEditUserInput
                                    placeholder={ "New password (opitional)" }
                                    type="password"
                                    onChange={ event => handleChange(user.id, event, "newPassword") }
                                    value={ user.editing.newPassword } />
                                <ContentEditUserInput
                                    placeholder={ "Last password (required)" }
                                    type="password"
                                    onChange={ event => handleChange(user.id, event, "passwordToVerify") }
                                    value={ user.editing.passwordToVerify } />

                                <Button value="Atualizar" type="submit" background_color={ colors.blue } color="white" />
                                <Icon icon="deleteUser" size="1.7em" color={ colors.purple } onClick={ () => { handleDelete(user.id); handleShowToEdit(user.id) } } />
                            </ContentEditUserForm>
                        </ContentEditUser>
                    </Content>
                </ContentWrapper>
            ))
            }
        </Container>
    )
}

export default UsersList