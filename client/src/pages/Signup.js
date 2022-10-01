import React from "react";
import { Container, CssBaseline, Box, Avatar, Typography, TextField, Button, Card, createTheme, ThemeProvider, FormGroup, FormControlLabel, Switch } from '@mui/material'
import { teal, cyan } from '@mui/material/colors';

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

const Signup = () => {
  

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
            <Box component='form'>
              <TextField
                margin="normal"
                required
                fullWidth
                id="studentId"
                label="Student Id"
                name="studentId"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Container>
      </Card>
    </ThemeProvider>
  )
}

export default Signup;