import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models";

export interface AuthState {
    isLoggedIn : boolean,
    logging?: boolean,
    currentUser?: User
}

export interface loginPayload {
    user: string,
    pwd: string,
}
const initialState: AuthState = {
    isLoggedIn: false,
    logging: false,
    currentUser : undefined,
}

const authSlice = createSlice({
name: 'auth',
initialState,
reducers: {
    login(state, action:PayloadAction<loginPayload>) {
        state.logging = true
    },
    loginSuccess(state, action:PayloadAction<User>) {
        state.logging = false
        state.currentUser = action.payload
    },
    loginFailed(state, action:PayloadAction<string>) {
        state.logging = false
    },
    logout(state) {
        state.isLoggedIn = false
        state.currentUser = undefined
    }
}
})

export const authAction = authSlice.actions//action
export const selectIsLoggedIn = (state: any) => state.isLoggedIn
export const selectIsLogging = (state: any) => state.logging
const authReducer = authSlice.reducer
export default authReducer