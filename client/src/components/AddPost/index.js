import React from 'react';
import { ThemeProvider, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, createTheme, Input } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { cyan, teal } from '@mui/material/colors';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import "./index.css";
import { color } from '@mui/system';

export default function PostDialogue() {
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

    const [open, setOpen] = React.useState(false);
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <div>
                <button
                    className="add-post"
                    variant='outlined'
                    onClick={handleClickOpen}
                >
                    <AddCircleIcon
                        size="large"
                        aria-label="add"
                        className="add-post-button"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            fontSize: '100px',
                            m: 1,
                            color: 'primary.main'
                        }}
                    />
                </button>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <div className='background-test'
                        sx={{
                            color: 'primary.main'
                        }}
                    >
                        <DialogTitle
                            id="responsive-dialog-title"
                            className='window-bg'
                        >
                            {"Add Post!"}
                        </DialogTitle>
                        <DialogContent
                            className='bg-color'>
                            <DialogContentText className='text-window-width-test'>
                                <TextField
                                    label="What's on your mind?"
                                    id='fullWidth'
                                    className='text-window'

                                />
                            </DialogContentText>
                        </DialogContent>
                    </div>
                    <DialogActions className='background-test'>
                        <div className='btn-container'>
                            <CancelOutlinedIcon className='cancel-post' onClick={handleClose} />
                            <h5> Cancel Post! </h5>
                        </div>

                        <div className='btn-container'>
                            <AddCircleOutlineOutlinedIcon className='submit-post' onClick={handleClose} />
                            <h5> Add Post! </h5>
                        </div>

                        <div>
                            <input accept="image/*" className="add-file-btn" id="raised-button-file" multiple type="file" />
                            <AttachFileOutlinedIcon onClick/>

                        </div>


                    </DialogActions>
                </Dialog>

            </div>
        </ThemeProvider>

    )
}