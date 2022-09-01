import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function RestForm() {
  return (
    <div className="card-content">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Жральня
          </Typography>
          <Typography variant="h5" component="div">
            Хороший ресторан
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <img className="product-img" src="https://laprovincia.ru/wa-data/public/site/themes/lp/assets/img/interior/IMG_5397.jpg" />
          </Typography>
          <Typography variant="body2">
            Ул. Пятницкая, д. 5
            <br />
            В Mоскве
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Подробнее</Button>
        </CardActions>
      </Card>
    </div>
  );
}
