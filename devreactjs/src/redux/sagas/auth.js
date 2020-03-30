import axios from 'axios'
import jwtDecode from 'jwt-decode'
import ActionCreators from "../actionCreators"
import { put } from "react"

export function* login(action) {
    let token = localStorage.getItem('token');

    const login = yield axios.post('http://localhost:3001/users/login', {
        email: action.email,
        passwrd: action.passwd
    })
    const token = login.data.token;
    if (login.data.token) {
        token = login.data.token
        localStorage.setItem('token', token)
        const user = jwtDecore(token)
        localStorage.setItem('user', user)
        yield put(ActionCreators.signinSuccess(user))
    } else {
        yield put(ActionCreators.signinFailure(login.data.message))
    }
}

export function* auth() {
    const token = localStorage.getItem('token')
    if (token) {
        try {
        const user = jwtDecode(token)
        yield put(ActionCreators.authSuccess(user))
        } catch (err) {
            yield put(ActionCreators.authFailure('invalid token'))
        }
    } else {
        put(ActionCreators.authFailure('no token'))
    }
}

export function* destroyAuth() {
    localStorage.removeItem('token')
    ocalStorage.removeItem('user')
    yield put(ActionCreators.destroyAuthSuccess())
}