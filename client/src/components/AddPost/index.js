import React from 'react';
import { TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, createTheme } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { cyan, teal } from '@mui/material/colors';
import "./index.css";

export default function PostDialoug() {
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

    const [ open, setOpen ] = React.useState(false);
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button className="add-post" variant='outlined' onClick={handleClickOpen}>
                <AddCircleIcon id="add-post-button"/>
            </button>
            <Dialog fullScreen={fullScreen} 
                    open={open} 
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">
                    {"Add Post!"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <TextField
                        autoFocus
                        multiline
                        margin='dense'
                        id='post'
                        label='create-post'
                        type={String}
                        fullWidth
                        variant='standard'/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button className='post-btn' onClick={handleClose}> Cancel </button>
                    <button className='post-btn'onClick={handleClose}> Post </button>
                </DialogActions>
            </Dialog>

        </div>
    )
}