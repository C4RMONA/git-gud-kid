import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, createTheme, ThemeProvider } from '@mui/material';
import './index.css'
import { teal, cyan } from '@mui/material/colors';
import Auth from '../../utils/auth'

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



const Header = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, bgcolor: 'primary.main' }}>
        <Grid container justifyContent='space-between' alignItems="center">
          <Grid>
            <Link className='home' to='/'>
              <h1 className='home' >ReachTeach</h1>
            </Link>
          </Grid>
          <Grid>
            <nav>
              {Auth.loggedIn() ? (
                <>
                  <Link className='headerNav' to='/dashboard'>Dashboard</Link> 
                  <Link className='headerNav' onClick={logout}>Logout</Link>
                </>
              ) : (

                <ul>
                  <Link className='headerNav' to='/login'>Login</Link>
                  <Link className='headerNav' to='/signup'>Signup</Link>
                  <Link className='headerNav'>Contact Us</Link>
                </ul>
              )}
            </nav>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default Header;