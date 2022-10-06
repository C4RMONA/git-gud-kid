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
              color: 'primary.main'
            }}
          />
          Add Post
        </button>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onSubmit={handleClose}
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
                  label="Share something with the class?"
                  id='fullWidth'
                  value={postText}
                  onChange={handleChange}
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
              <AddCircleOutlineOutlinedIcon className='submit-post' onClick={handleFormSubmit} />
              <h5> Add Post! </h5>
            </div>
          </DialogActions>
        </Dialog>

      </div>
    </ThemeProvider>

  )
}