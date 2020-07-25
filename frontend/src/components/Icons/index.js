import React from "react"
import { FaUsers, FaUserPlus } from "react-icons/fa"

function Icons ({ icon, ...rest }) {
    if (icon === "user") {
        return <FaUsers { ...rest } />
    }
    if (icon === "newUser") {
        return <FaUserPlus { ...rest } />
    }

}

export default Icons