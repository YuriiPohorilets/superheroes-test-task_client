import { List } from '@mui/material';
import { HeroesItem } from 'components/HeroesItem/HeroesItem';
import { ErrorMsg } from 'components/ErrorMsg/ErrorMsg';
import { list } from './heroListStyles';

export const HeroesList = ({ heroes }) => {
  return (
    <>
      {heroes ? (
        <List sx={list}>
          {heroes.map(({ _id, nickname, images }) => (
            <HeroesItem key={_id} id={_id} nickname={nickname} images={images} />
          ))}
        </List>
      ) : (
        <ErrorMsg />
      )}
    </>
  );
};
