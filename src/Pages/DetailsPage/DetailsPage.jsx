import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailsPage.css';
import CustomCard from '../../Components/CustomCard/CustomCard';

// MUI
import { Grid, Typography, Box, Card, CardContent } from '@mui/material';

const DetailsPage = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  return (
    <Box className='Alinear_container' p={4}>
      <Grid container spacing={4}>
        <Grid className='Alinear' item xs={12} md={7}>
          <Card className='Tarjeta' elevation={3}>
            <CardContent className='ContenidoTarjeta'>
              <div className="contenido-flex">
                <div className="columna-texto">
                  <Typography variant="h4" gutterBottom>{data.name}</Typography>
                  <Typography variant="body1"><strong className='Subtitulo'>Ki:</strong> {data.ki}</Typography>
                  <Typography variant="body1"><strong className='Subtitulo'>Max Ki:</strong> {data.maxKi}</Typography>
                  <Typography variant="body1"><strong className='Subtitulo'>Raza:</strong> {data.race}</Typography>
                  <Typography variant="body1"><strong className='Subtitulo'>Género:</strong> {data.gender}</Typography>
                  <Typography variant="body1"><strong className='Subtitulo'>Afiliación:</strong> {data.affiliation}</Typography>

                  <Box mt={2}>
                    <Typography variant="body1"><strong>Descripción:</strong></Typography>
                    <Typography variant="body2" textAlign="justify">
                      {data.description}
                    </Typography>
                  </Box>
                </div>

                <div className="columna-imagen">
                  <img
                    src={data.image}
                    className="ImagenContenido"
                    alt={data.name}
                  />

                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailsPage;
