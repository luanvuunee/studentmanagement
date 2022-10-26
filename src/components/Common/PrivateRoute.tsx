import React from "react";
import { Route, RouteProps, Routes, useNavigate } from "react-router-dom";




export function PrivateRoute(props: RouteProps) {

    const navigate = useNavigate()
    const isLogged = Boolean(localStorage.getItem('access_token'));
    if (isLogged) {
        return navigate('/login')
    }

    return <Routes><Route {...props} />
</Routes>
}



