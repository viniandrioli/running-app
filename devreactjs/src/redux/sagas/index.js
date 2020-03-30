import { takeLatest, all, put, take } from "redux-saga/effects"
import { Types } from "../actionsCreators"
import axios from "axios"
import jwtDecore from 'jwt-decote';
import ActionCreators from "../actionsCreators"

import { getRuns, createRun } from "./runs";


export default function* rootSaga() {
    yield all([
        takeLatest(Types.SIGNIN_REQUEST, login),
        takeLatest(Types.AUTH_REQUEST, auth),
        takeLatest(Types.GET_RUNS_REQUEST, getRuns),
        takeLatest(Types.CREATE_RUNS_REQUEST, createRun),
        takeLatest(Types.DESTROY_AUTH_REQUEST, destroyAuth),

        put(ActionCreators.authRequest()),

    ])
}