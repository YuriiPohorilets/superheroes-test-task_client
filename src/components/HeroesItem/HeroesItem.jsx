import { useLocation, Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, CardActionArea, Typography, ListItem } from '@mui/material';
import NoImg from 'img/noImg.jpg';
import { listItem, card, cardAction, cardMedia, cardContent, cardName } from './heroesItemStyles';

export const HeroesItem = ({ id, nickname, images }) => {
  const location = useLocation();
  const previewImg = images[0];

  return (
    <ListItem sx={listItem}>
      <Card sx={card}>
        <CardActionArea
          sx={cardAction}
          component={Link}
          to={`/heroes/${id}`}
          state={{ from: location }}
        >
          <CardMedia
            component="img"
            image={previewImg ? previewImg : NoImg}
            alt={nickname}
            width={300}
            sx={cardMedia}
          />

          <CardContent sx={cardContent}>
            <Typography sx={cardName}>{nickname}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ListItem>
  );
};
