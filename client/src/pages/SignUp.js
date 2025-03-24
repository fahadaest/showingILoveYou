import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import CustomAlert from '../components/Alert/Alert';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { checkAuthStatus } from "../redux/slices/authSlice";
import { ReactComponent as GoogleIcon } from '../assets/google.svg';

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    [theme.breakpoints.up('sm')]: {
        width: '450px',
    },
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
    backgroundColor: "#32AA27",
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage:
                'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));

export default function SignUp(props) {
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [nameError, setNameError] = React.useState(false);
    const [nameErrorMessage, setNameErrorMessage] = React.useState('');
    const baseURL = process.env.REACT_APP_BASE_URL;
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');
    const [duration, setDuration] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validateInputs = () => {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const name = document.getElementById('name');

        let isValid = true;

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        if (!name.value || name.value.length < 1) {
            setNameError(true);
            setNameErrorMessage('Name is required.');
            isValid = false;
        } else {
            setNameError(false);
            setNameErrorMessage('');
        }

        return isValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateInputs()) {
            setMessage("Enter Valid Inputs!");
            setSeverity("error");
            setShowAlert(true);
            return;
        }

        setMessage("Registering!");
        setSeverity("warning");
        setShowAlert(true);

        const data = new FormData(event.currentTarget);
        const userData = {
            username: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
        };

        try {
            const response = await axios.post(`${baseURL}/api/auth/register`, userData);
            console.log('User registered:', response.data);

            const { accessToken, refreshToken } = response.data;

            if (accessToken && refreshToken) {
                Cookies.set('accessToken', accessToken, { expires: 1 / 24, secure: false, sameSite: 'Lax' }); //TODO change to Strict
                Cookies.set('refreshToken', refreshToken, { expires: 1, secure: false, sameSite: 'Lax' }); //TODO change to Strict
                dispatch(checkAuthStatus());
                setMessage("User Registered Successfully!");
                setSeverity("success");
                setShowAlert(true);
                window.location.href = '/profile';
            } else {
                setMessage("Registration failed. No access token received.");
                setSeverity("error");
                setShowAlert(true);
            }

        } catch (error) {
            setMessage("Registration failed. Please try again.");
            setSeverity("error");
            setShowAlert(true);
            console.error('Error registering user:', error);
        }
    };

    const handleGoogleAuth = async () => {
        try {
            window.open(`${process.env.REACT_APP_BASE_URL}/api/auth/google`, "_self");
            dispatch(checkAuthStatus());
        } catch (error) {
            console.error("Google Auth Error:", error);
        }
    };

    return (
        <SignUpContainer direction="column" justifyContent="space-between">
            {showAlert && (
                <CustomAlert
                    message={message}
                    severity={severity}
                    duration={duration}
                    setShowAlert={setShowAlert}
                />
            )}
            <Card variant="outlined">
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', fontWeight: "600", display: "flex", justifyContent: "center" }}
                >
                    Sign up
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                >
                    <FormControl>
                        <FormLabel htmlFor="name">Full name</FormLabel>
                        <TextField
                            autoComplete="name"
                            name="name"
                            required
                            fullWidth
                            id="name"
                            placeholder="Jon Snow"
                            error={nameError}
                            helperText={nameErrorMessage}
                            color={nameError ? 'error' : 'primary'}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            placeholder="your@email.com"
                            name="email"
                            autoComplete="email"
                            variant="outlined"
                            error={emailError}
                            helperText={emailErrorMessage}
                            color={passwordError ? 'error' : 'primary'}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <TextField
                            required
                            fullWidth
                            name="password"
                            placeholder="••••••"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            variant="outlined"
                            error={passwordError}
                            helperText={passwordErrorMessage}
                            color={passwordError ? 'error' : 'primary'}
                        />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="I want to receive updates via email."
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={validateInputs}
                        sx={{
                            backgroundColor: "#32AA27",
                            color: "#fff"
                        }}
                    >
                        Sign up
                    </Button>
                </Box>
                <Divider>
                    <Typography sx={{ color: 'text.secondary' }}>or</Typography>
                </Divider>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button
                        fullWidth
                        variant="outlined"
                        sx={{ color: "#32AA27", border: "1px solid #32AA27" }}
                        startIcon={<GoogleIcon width={24} height={24} />}
                        onClick={handleGoogleAuth}
                    >
                        Sign up with Google
                    </Button>
                    <Typography sx={{ textAlign: 'center' }}>
                        Already have an account?{' '}
                        <Link
                            href="/sign-in"
                            variant="body2"
                            sx={{ alignSelf: 'center', color: "#32AA27" }}
                        >
                            Sign in
                        </Link>
                    </Typography>
                </Box>
            </Card>
        </SignUpContainer >
    );
}