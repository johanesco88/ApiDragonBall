import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './CustomCard.css'


const CustomCard = ({ user }) => {
  return (
    <Card className='card' sx={{ maxWidth: 300, overflow: 'visible', position: 'relative' }}>
      <CardActionArea>
        <div className="media-wrapper">
          <img
            src={user.image}
            alt={user.name}
            className="zoom-image"
          />
        </div>
        <CardContent className='cardContent'>
          <h1 className='name'>
            {user.name}
          </h1>
          <h2 className='contenido'>
            {user.race}
          </h2>
        </CardContent>
      </CardActionArea>
    </Card>


  )
}

export default CustomCard