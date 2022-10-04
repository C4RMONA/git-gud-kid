import React from "react";
import { Box, CssBaseline, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import { useQuery } from "@apollo/client";
import './index.css'

import Card from "../Card";
import { QUERY_POST } from "../../utils/queries";

const thoughts = [
  {
    id: '1',
    username: 'teacher ',
    createdAt: '01/06/2022',
    thoughtText: "Yall's kids drive me nuts, keep your children home!!"
  },
  {
    id: '2',
    username: 'teacher ',
    createdAt: '01/10/2022',
    thoughtText: "They don't pay me enough for your little 'precious' Johnny Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus exercitationem ullam recusandae aut provident facere suscipit, dolorum nulla totam pariatur error itaque quasi quo fuga tenetur commodi facilis. Vitae, earum!!"
  }
]


const PostList = () => {
  const title = 'Teacher';
  const {loading, data} = useQuery(QUERY_POST)

  return (
    <div className="postList">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <div className="postMap">
          {thoughts &&
            thoughts.map(thought => (
              <Card cardWidth="49.5vw">
                <div key={thought._id}>
                  <h2>{title}</h2>
                  <p>
                    {thought.username}
                    thought on {thought.createdAt}
                  </p>
                  <div>
                    <Typography sx={{ width: '800px' }}>
                      {thought.thoughtText}
                    </Typography>
                    <div>
                      <FavoriteBorderIcon className="icon"></FavoriteBorderIcon>
                      <MessageIcon className="icon"></MessageIcon>
                      <a href="/dashboard" className="comment">
                        4 Comments {thought.reactionCount}
                      </a>

                    </div>

                  </div>
                </div>
              </Card>
            ))}
        </div>
      </Box >
    </div >
  )
}

export default PostList;
