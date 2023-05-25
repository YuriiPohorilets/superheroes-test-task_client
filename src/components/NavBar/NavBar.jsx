import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, Button } from '@mui/material';
import { routesList } from 'refs/constants';
import { navList, navItem } from './navBarStyles';

export const NavBar = () => {
  return (
    <Box component="nav">
      <List sx={navList}>
        {routesList.map(({ name, path }) => (
          <ListItem key={name} sx={{ p: 0 }}>
            <Button component={NavLink} to={path} sx={navItem}>
              {name}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
