import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Container, CssBaseline, Box, Avatar, Typography, TextField, Button, Card, createTheme, ThemeProvider, FormGroup, FormControlLabel, Switch } from '@mui/material'
import { teal, cyan } from '@mui/material/colors';
import { LOGIN_USER } from "../utils/mutations";
import Auth from '../utils/auth';

const theme = createTheme({
  palette: {
    primary: {
      main: teal[700]
    },
    secondary: {
      main: cyan[800]
    }
  }
})



const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };


  return (
    <ThemeProvider theme={theme}>
      <Card variant="outline" >
        <Container component='main'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}></Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>

            <Box component='form' onSubmit={handleFormSubmit}>
              <TextField
                className="form-input"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formState.email}
                onChange={handleChange}
                autoComplete="email"
                autoFocus
              />
              <TextField
                className="form-input"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
                autoComplete="current-password"
              />
              <Button
                className="form-btn"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, }}
              >
                Sign In
              </Button>
              {error && <div>Login failed</div>}
            </Box>
          </Box>
        </Container>
      </Card>
    </ThemeProvider>
  )
}
export default Login;