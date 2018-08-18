import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Orders from './Orders'
import Login from './Login'
import Registration from './Registration'
import ForgotPassword from './ForgotPassword'

const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            <PrivateRoute exact path='/' component={Orders} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
    </BrowserRouter>
)

export default AppRoutes