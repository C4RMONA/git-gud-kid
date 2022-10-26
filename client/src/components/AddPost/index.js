import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

import { ThemeProvider, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, createTheme, Input } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { cyan, teal } from '@mui/material/colors';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Auth from '../../utils/auth'
import "./index.css";

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

  const [postText, setText] = useState('');
  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, posts: [...me.posts, addPost] } },
        });
      } catch (e) {
        console.warn('First post insertion by user!')
      }

      const { posts } = cache.readQuery({ QUERY_POSTS })

      cache.writeQuery({
        query: QUERY_POSTS,
        data: { posts: [addPost, ...posts] }
      });
    }
  })

  console.log(postText)
  const handleChange = (event) => {
    setText(event.target.value);
  }



  const handleFormSubmit = async event => {

    try {
      await addPost({
        variables: { postText }
      });
      setText('');

    } catch (e) {
      console.error(e);
    }
  }

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
              color: 'primary.main',
              bgcolor: 'white'
            }}
          />
          Add Post
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
            {"Add Post!"}
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
                value={postText}
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
}