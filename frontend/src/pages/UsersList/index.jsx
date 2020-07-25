import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import Api from "../../services/Api"

import { Container, ContentWrapper, Content } from "./style"

function UsersList () {

    const [userList, setUserList] = useState([])
    const history = useHistory()

    useEffect(() => {

        Api.get("/users", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => {
            const data = res.data

            if (data.error) history.push("/Login?session=expired")

            const rawUserList = data.data.map(user => {
                return (
                    <ContentWrapper key={ user.id }>
                        <Content>
                            <span>{ user.name }</span>
                            <span>{ user.email }</span>
                            <span>{ user.createdAt }</span>
                        </Content>
                    </ContentWrapper>
                )
            })

            setUserList(rawUserList)

        })



        return
    }, [])

    return (
        <Container>
            { userList }
        </Container>
    )
}

export default UsersList