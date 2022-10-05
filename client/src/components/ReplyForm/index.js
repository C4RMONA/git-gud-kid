import React, { useState } from 'react';
import {  TextField } from '@mui/material'

const ReplyForm = () => {
  const [postText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  


  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  }

  const handleFormSubmit = async event => {
    event.preventDefault();
  };

  return (
    <div className='postForm'>
      <p className={` ${characterCount === 280}`}>
        Character Count: {characterCount}/280
      </p>
      <form onSubmit={handleFormSubmit}>
      <TextField 
        fullWidth
        multiline
        maxRows={6}
        variant='standard'
        label='Share a Post?' 
        value={postText} 
        onChange={handleChange}
        />
        <button  type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ReplyForm;