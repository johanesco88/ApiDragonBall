import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import './AcercaDePage.css';

const cards = [
  {
    id: 1,
    image: 'https://avatars.githubusercontent.com/u/151900867?v=4',
    title: 'Johan Stiven Escobar',
    description: 'Backend - Estudiante de Ingeniería de Sistemas',
    gitHub: 'https://github.com/johanesco88',
    insta: 'https://www.instagram.com/johanescobar47?igsh=MWxqcHhrbXc2MGFwag==',
    facebook: 'https://www.facebook.com/share/18ZwHnG3NK/',
    Email: 'joha.escobar@udla.edu.co',
  },
  {
    id: 2,
    image: 'https://avatars.githubusercontent.com/u/199640250?v=4',
    title: 'Alejandro Antury Zambrano',
    description: 'Frontend - Estudiante de Ingeniería de Sistemas',
    gitHub: 'https://github.com/AlejandroAnturyZ',
    insta: 'https://www.instagram.com/alejandroaz18?igsh=MTF1NnBrdHNmcm1vYw==',
    facebook: 'https://www.facebook.com/share/1SneBCGmx7/',
    Email: 'a.antury@udla.edu.co',
  }
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  const [copiedEmail, setCopiedEmail] = React.useState('');

  const copyEmail = (email) => {
    navigator.clipboard.writeText(email).then(() => {
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(''), 2000); // Oculta el mensaje después de 2 segundos
    });
  };

  return (
    <Box className="container">
  {cards.map((card, index) => (
    <Card key={card.id} className="card">
      <CardActionArea onClick={() => setSelectedCard(index)}>
        <CardContent className="card-content">
          {card.image && (
            <img src={card.image} alt={card.title} className="card-img" />
          )}
          <Typography variant="h5">{card.title}</Typography>
          <Typography variant="body2" >
            {card.description}
          </Typography>
          <Typography>
            Contacto:{" "}
            <Button variant="text" onClick={() => copyEmail(card.Email)}>
              {card.Email}
            </Button>
            {copiedEmail === card.Email && (
              <Typography variant="caption" color="success.main">
                ¡Copiado!
              </Typography>
            )}
          </Typography>
          <div id='botones'>
            <a className='EstiloBoton' href={card.gitHub} target="_blank" rel="noopener noreferrer">GitHub </a>
            <a className='EstiloBoton' href={card.insta} target="_blank" rel="noopener noreferrer">Instagram </a>
            <a className='EstiloBoton' href={card.facebook} target="_blank" rel="noopener noreferrer">Facebook </a>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  ))}
</Box>



  );
}

export default SelectActionCard;
