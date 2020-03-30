import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from "./elements/Header"
const Admin = props => {
    if (!props.auth.isAuth) {
        return <Redirect to={'/login'} />
    }
    if (props.auth.user.role !== 'admin') {
        return <Redirect to="/restrito" />
    }
    return (
        <div>
            <Header />
            <Route path={`${props.match.path}/`} exact component={Home} />
            <Route path={`${props.match.path}/users`} component={Users} />
        </div>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Admin)