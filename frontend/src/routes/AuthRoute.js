import React from "react"
import { Redirect } from "react-router-dom"

export default function Authentication ({
    children: Component
}) {

    const token = localStorage.getItem("token") || false

    if (!token) {
        return <Redirect to="/Login" />
    }

    return Component
}