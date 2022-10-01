import React from 'react';
import '../PostList';
import { Box, Card, CardActions, CardContent, Button, } from '@mui/material';
import "./index.css"

  const CardComponent = ( {cardWidth, children} ) => {
    return (<Box sx={{ 
        width: cardWidth, 
        alignItems: "center"
        }}>
        <Card variant="outlined">
      <CardContent className='cardContainer' >
        {children}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Card>
    </Box> 
    )
  }
  
  export default CardComponent;
  