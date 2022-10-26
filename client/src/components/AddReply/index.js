import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REPLY } from '../../utils/mutations';

import { ThemeProvider, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, createTheme } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { cyan, teal } from '@mui/material/colors';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

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

const ReplyForm = ({ postId }) => {
  const [replyBody, setBody] = useState('');
  const [addReply, { error }] = useMutation(ADD_REPLY);

  const handleChange = event => {
    setBody(event.target.value);
  };

  console.log(postId)
  console.log(replyBody)

  // submit form
  const handleFormSubmit = async (event) => {

    try {
      await addReply({
        variables: { replyBody, postId }
      });
      
      setBody('');
      setOpen(false);
    } catch (e) {
      console.error(e);
    }
  };

  const [open, setOpen] = React.useState(false);

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
              color: 'primary.main',
              bgcolor: 'white'
            }}
          />
          Add Reply
        </button>
        <Dialog
          open={open}
          onSubmit={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle
            id="responsive-dialog-title"
            className='dialog-header'
          >
            {"Add Reply!"}
          </DialogTitle>
          <DialogContent
            className='bg-color'>
            <DialogContentText className='textfield-container'>
              <TextField
                label="Share something with the class?"
                id='fullWidth'
                multiline
                minRows={2}
                maxRows={4}
                value={replyBody}
                onChange={handleChange}
                className='text-window'
                variant='filled'
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions className='background-test'>
            <div className='btn-container'>
              <CancelOutlinedIcon className='post-btn' onClick={handleClose} />
              <h5> Cancel Post! </h5>
            </div>

            <div className='btn-container'>
              <AddCircleOutlineOutlinedIcon className='post-btn' onClick={handleFormSubmit} />
              <h5> Add Post! </h5>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  )
};

export default ReplyForm;