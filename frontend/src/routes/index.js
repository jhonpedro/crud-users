import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import AuthRoute from "./AuthRoute"
import Login from "../pages/Login"

function Routes () {
    return (
        <Switch>
            <Route path="/" exact >
                <AuthRoute>
                    <Login />
                </AuthRoute>
            </Route>
            <Route path="*">
                <Redirect to="/" />
            </Route>
        </Switch>
    )
}

export default Routes