import React from "react"
import { FaUsers, FaUserPlus, FaUserEdit, FaUserTimes } from "react-icons/fa"
import { Cursor } from "./style"

function Icons ({ icon, ...rest }) {
    if (icon === "user") {
        return <FaUsers { ...rest } />
    }
    if (icon === "newUser") {
        return <FaUserPlus { ...rest } />
    }
    if (icon === "editUser") {
        return (
            <Cursor>
                <FaUserEdit { ...rest } />
            </Cursor>
        )
    }
    if (icon === "deleteUser") {
        return (
            <Cursor>
                <FaUserTimes { ...rest } />
            </Cursor>
        )
    }
}

export default Icons