import { Box, Button, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/hooks";
import { authAction, selectIsLogging } from "../authSlice";
const LoginPage = () => {
    const dispatch = useAppDispatch()
    const isLoggedIn = useSelector(selectIsLogging)


    const handFakeLogin = () => {
        dispatch(authAction.login({user:'',pwd: '' }))

        
    }
    const handFakeLogout = () => {
        dispatch(authAction.logout())
    }
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            minHeight: '80vh',
            alignItems: 'center',
        }} >
            <Paper elevation={1} sx={{ padding: '10px' }} >
                <Typography component='p' >
                    Student Management
                </Typography>
                <Box mt={2} >
                    <Button variant="text" fullWidth color="info" onClick={handFakeLogin}>
                        Fake Login
                    </Button>
                   
                </Box>
                <Button variant="text" fullWidth color="warning" onClick={handFakeLogout}>
                        Fake Logout
                    </Button>
            </Paper>
        </Box>
    )
}
export default LoginPage;