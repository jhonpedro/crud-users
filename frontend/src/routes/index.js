import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import AuthRoute from "./AuthRoute"
import Login from "../pages/SingIn/Login"
import UsersList from "../pages/UsersList"
import User from "../pages/User"

function Routes () {
    return (
        <Switch>
            <Route path="/Login" >
                <Login />
            </Route>
            <Route path="/Users">
                <AuthRoute>
                    <UsersList />
                </AuthRoute>
            </Route>
            <Route path="/User/:id">
                <AuthRoute>
                    <User />
                </AuthRoute>
            </Route>
            <Route path="*">
                <Redirect to="/Login" />
            </Route>
        </Switch>
    )
}

export default Routes