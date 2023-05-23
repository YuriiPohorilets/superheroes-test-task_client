import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  ListItem,
} from "@mui/material";
import NoImg from "img/noImg.jpg";
import {
  listItem,
  card,
  cardAction,
  cardMedia,
  cardContent,
  cardName,
} from "./heroesItemStyles";

export const HeroesItem = ({ nickname, images }) => {
  const previewImg = images[0];

  return (
    <ListItem sx={listItem}>
      <Card sx={card}>
        <CardActionArea sx={cardAction}>
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
