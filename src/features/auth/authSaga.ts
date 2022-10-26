import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, fork, put, take } from "redux-saga/effects";
import { authAction, loginPayload } from "./authSlice";


function* handleLogin(payload: loginPayload) { 
    try {
        yield delay(1000)
        console.log('handle Login',payload)
        localStorage.setItem('token','99999999kajsjkdh')
        yield put (authAction.loginSuccess({
            name: "EZ",
            id: 1
        }))
    } catch (error) {
        yield put (authAction.loginFailed('LOADING ERROR'))
    }
   
}
function* handleLogout() { 
    console.log(localStorage,'1231231');
    yield delay(1000)
    localStorage.removeItem('token')
  
    
    //ridirect login fake
}
function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = Boolean(localStorage.getItem('token'))
        if(!isLoggedIn) {
            const action: PayloadAction<loginPayload> = yield take(authAction.login.type)
            yield fork(handleLogin, action.payload)
        }
        yield take(authAction.logout.type)
        yield call(handleLogout)
    }
   
}

export default function* authSaga() {
    yield fork(watchLoginFlow)
} 