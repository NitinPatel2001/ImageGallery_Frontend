import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard(Image1, UserName, instagram, Likes) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Image1}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {UserName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {instagram}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Likes</Button>
        <Button size="small">{Likes}</Button>
      </CardActions>
    </Card>
  );
}