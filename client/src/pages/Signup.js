import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import { Container, CssBaseline, Box, Avatar, Typography, TextField, Button, Card, createTheme, ThemeProvider, FormGroup, FormControlLabel, Switch } from '@mui/material'
import { teal, cyan } from '@mui/material/colors';

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

const Signup = (props) => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState }
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
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
              Signup
            </Typography>
            <Box component='form' onSubmit={handleFormSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={formState.username}
                onChange={handleChange}
                autoFocus
              />
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
                Sign Up
              </Button>
              {error && <div>Sign up failed</div>}
            </Box>
          </Box>
        </Container>
      </Card>
    </ThemeProvider>
  )
}

export default Signup;