import React from 'react';
import '../PostList';
import { Box, Card, CardContent, CardActionArea, CardMedia, } from '@mui/material';
import "./index.css"

const CardComponent = ({ cardWidth, children }) => {
    return (<Box sx={{
        width: cardWidth,
        alignItems: "center"
    }}>
        <Card variant="outlined">
            <CardActionArea>
                <CardMedia component="img" height="100%" width="100%"></CardMedia>
                <CardContent variant="h5" component="div" className='cardContainer' >
                    {children}
                </CardContent>
            </CardActionArea>
        </Card>
    </Box>
    )
}

export default CardComponent;
