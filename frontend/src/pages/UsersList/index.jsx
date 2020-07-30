import React, { useState, useEffect, useRef } from "react"
import { useHistory, useLocation } from "react-router-dom"
import Api from "../../services/Api"
import { Link } from "react-router-dom"
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
    const location = useLocation()

    useEffect(() => {

        Api.get("/users", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => {
            const data = res.data

            if (data.error) return history.push("/Login?session=expired")

            let idSearching
            location.hash ? idSearching = parseInt(location.hash.replace("#user", "")) : idSearching = false

            const rawUserList = data.data.map(user => {
                let showToEdit = false
                if (idSearching === user.id) {
                    showToEdit = true
                }
                return (
                    {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        createdAt: user.createdAt,
                        showToEdit,
                        editing: {
                            newName: "",
                            newEmail: "",
                            newPassword: "",
                            passwordToVerify: ""
                        },
                        selectedElem: idSearching
                    }
                )
            })

            setUsersList(rawUserList)
        })
        return
    }, [history, location.hash])

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

        if (response.data.error) return toast.warn("Não foi possivel efetuar a atualização")

        toast.success("Atualização efetuada com sucesso!")
        setTimeout(() => {
            console.log("2 segundos depois")
            window.location.reload()
        }, 1000)
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

    const contentLoaded = elem => {
        console.log(elem)
    }

    return (
        <Container>
            { usersList.map(user => {
                return (
                    <ContentWrapper key={ user.id } onLoad={ (e) => contentLoaded(e) }>
                        <a name={ `user${user.id}` } />
                        <Content>
                            <ContentData showToEdit={ user.showToEdit }>
                                <Link to={ `/User/${user.id}` }>
                                    <span>{ user.name }</span>
                                    <span>{ user.email }</span>
                                    <span>{ user.createdAt }</span>
                                </Link>
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
                )
            })
            }
        </Container>
    )
}

export default UsersList