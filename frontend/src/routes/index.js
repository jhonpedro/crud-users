import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import AuthRoute from "./AuthRoute"
import Login from "../pages/SingIn/Login"

function Routes () {
    return (
        <Switch>
            <Route path="/Login" >
                <Login />
            </Route>
            <Route>

            </Route>
            <Route path="/Users">
                <AuthRoute isPrivate>
                    <h1>Users</h1>
                </AuthRoute>
            </Route>
            <Route path="*">
                <Redirect to="/Login" />
            </Route>
        </Switch>
    )
}

export default Routes