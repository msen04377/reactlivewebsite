import React from "react";
import {
    HashRouter as Router,
    Redirect,
    Route,
    RouteComponentProps,
    Switch,
} from "react-router-dom";
import SideBarHead from "./component/sidebar/sidebar";
import Dashboard from "./pages/dashboard_layout/dashboard";
import LoginLayout from "./pages/login_layout/login";


const Routes = () => {
    if (localStorage.getItem("token") == null) {
        return (
            <LoginLayout />
        )
    } else {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                </Switch>
            </Router>
        );
    }
}

export default Routes