import React from "react"
import { FaUsers } from "react-icons/fa"

function Icons ({ icon, ...rest }) {
    if (icon === "user") {
        return <FaUsers { ...rest } />
    }

}

export default Icons