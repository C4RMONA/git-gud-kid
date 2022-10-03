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

    const [open, setOpen] = React.useState(false);
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button
                className="add-post"
                variant='outlined'
                onClick={handleClickOpen}
            >
                <AddCircleIcon size="large" aria-label="add" className="add-post-button"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        fontSize: '100px'
                    }}
                />
                Add Post!
            </button>
            <Dialog fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">
                    {"Add Post!"}
                </DialogTitle>
                <DialogContent >
                    <DialogContentText >
                        <TextField
                        fullWidth
                        label="What's on your mind?"
                        id='fullWidth'
                        sx={{
                            color: "primary"
                        }}
                           />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button className='post-btn' onClick={handleClose}> Cancel </button>
                    <button className='post-btn' onClick={handleClose}> Post </button>
                    <input accept="image/*" className="add-file-btn" id="raised-button-file" multiple type="file"
/>
                </DialogActions>
            </Dialog>

        </div>
    )
}