import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia 
        component="img"
        alt="green iguana"
        height="140"
        image="https://tse4.mm.bing.net/th?id=OIP.Q-H2vvVR-4JY1xRBbWI84QHaDf&pid=Api&P=0&w=363&h=172"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          HTML
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
  );
}
