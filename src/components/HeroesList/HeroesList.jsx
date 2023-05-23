// import { useLocation } from "react-router-dom";
import { List } from "@mui/material";
import { HeroesItem } from "components/HeroesItem/HeroesItem";
import { list } from "./heroListStyles";

export const HeroesList = ({ heroes }) => {
  // const location = useLocation();

  return (
    <List sx={list}>
      {heroes.map(({ _id, nickname, images }) => (
        <HeroesItem key={_id} nickname={nickname} images={images} />
      ))}
    </List>
  );
};
