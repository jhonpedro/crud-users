import React from "react"
import { Redirect } from "react-router-dom"

export default function Authentication ({
    children: Component,
    isPrivate
}) {

    const token = localStorage.getItem("token")

    if (!token && isPrivate) {
        return <Redirect to="/" />
    }

    return Component
}