import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import AuthRoute from "./AuthRoute"
import Login from "../pages/SingIn/Login"
import UserList from "../pages/UsersList"

function Routes () {
    return (
        <Switch>
            <Route path="/Login" >
                <Login />
            </Route>
            <Route path="/Users">
                <AuthRoute isPrivate>
                    <UserList />
                </AuthRoute>
            </Route>
            <Route path="*">
                <Redirect to="/Login" />
            </Route>
        </Switch>
    )
}

export default Routes